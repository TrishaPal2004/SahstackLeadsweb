import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Upload, User, Mail, Phone, Send, CheckCircle } from 'lucide-react';
import Qrr from './Qrr.jpeg'; // Ensure this path is correct
const Paymentpage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    paymentScreenshot: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const SERVICE_ID = 'service_504jiho';
  const TEMPLATE_ID = 'template_hhod0a7';
  const PUBLIC_KEY = 'aTOq6h_cUzPy7UMW5';

  // QR Code as base64 (replace with your actual QR code)
  const qrCodeBase64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Convert file to base64 with compression
  const compressAndConvertImage = async (file) => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        // Set maximum dimensions
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 600;
        
        let { width, height } = img;
        
        // Calculate new dimensions
        if (width > height) {
          if (width > MAX_WIDTH) {
            height = (height * MAX_WIDTH) / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width = (width * MAX_HEIGHT) / height;
            height = MAX_HEIGHT;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        
        // Draw and compress
        ctx.drawImage(img, 0, 0, width, height);
        
        // Convert to base64 with reduced quality
        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
        resolve(compressedBase64);
      };
      
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  };

  // Upload to temporary hosting service (like imgbb, cloudinary, etc.)
  const uploadImageToCloud = async (file) => {
    try {
      // Compress image first
      const compressedBase64 = await compressAndConvertImage(file);
      
      // Option 1: Use imgbb (free image hosting)
      const formData = new FormData();
      
      // Convert base64 back to blob for upload
      const response = await fetch(compressedBase64);
      const blob = await response.blob();
      
      formData.append('image', blob);
      
      // Using a public API (replace with your preferred service)
      // Note: You'll need to sign up for imgbb and get your API key
      const IMGBB_API_KEY = 'your_imgbb_api_key'; // Replace with actual key
      
      const uploadResponse = await fetch(`https://api.imgbb.com/1/upload?key=95beb04f0a3c6025836bf99ebb4079c5`, {
        method: 'POST',
        body: formData,
      });
      
      if (!uploadResponse.ok) {
        throw new Error('Upload failed');
      }
      
      const result = await uploadResponse.json();
      return result.data.url;
      
    } catch (error) {
      console.error('Cloud upload failed:', error);
      // Fallback to compressed base64
      return await compressAndConvertImage(file);
    }
  };

  const handleFileUpload = async (file) => {
    if (file && file.type.startsWith('image/')) {
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size too large. Please choose an image under 5MB.');
        return;
      }
      
      setFormData(prev => ({
        ...prev,
        paymentScreenshot: file
      }));
    } else {
      alert('Please upload a valid image file');
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const sendEmail = async () => {
    try {
      let imageData;
      
      // Try to upload to cloud first, fallback to compressed base64
      try {
        imageData = await uploadImageToCloud(formData.paymentScreenshot);
      } catch (error) {
        console.log('Cloud upload failed, using compressed base64');
        imageData = await compressAndConvertImage(formData.paymentScreenshot);
      }
      
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        // If it's a URL, send the URL; if base64, indicate it's attached
        payment_screenshot: imageData.startsWith('http') ? imageData : 'Payment screenshot attached (compressed)',
        // For base64, you might want to send it as a separate parameter
        image_data: imageData.startsWith('http') ? '' : imageData.substring(0, 50000) // Limit base64 size
      };

      return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    } catch (error) {
      console.error('Error preparing email:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.paymentScreenshot) {
      alert('Please fill all fields and upload payment screenshot');
      return;
    }

    setIsSubmitting(true);
    try {
      await sendEmail();
      setIsSubmitted(true);
    } catch (error) {
      console.error('Email send error:', error);
      alert('Failed to send email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Registration Successful!</h2>
          <p className="text-gray-600 mb-4">
            Confirmation emails have been sent to you and our team.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', email: '', phone: '', paymentScreenshot: null });
            }}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Submit Another Registration
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full md:flex">
        {/* QR Section */}
        <div className="md:w-1/2 flex flex-col items-center justify-center p-8 bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Scan & Pay</h2>
          <div className="w-70 h-70 bg-gray-200 rounded-xl shadow-lg flex items-center justify-center">
            {/* Replace this div with your actual QR code image */}
            <img src={Qrr} alt="QR Code" className="w-full h-full object-cover rounded-xl" />
          </div>
          <p className="mt-4 text-sm text-gray-600 text-center">
            After payment, take a screenshot of the transaction.
            Then upload the screenshot below
          </p>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Register Now</h1>
          
          <div className="space-y-6">
            {/* Name */}
            <div className="relative">
              <User className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Screenshot (Max 5MB)
              </label>
              <div
                className={`border-2 border-dashed rounded-lg p-6 cursor-pointer transition-all ${
                  dragActive
                    ? 'border-purple-500 bg-purple-50'
                    : formData.paymentScreenshot
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-300 hover:border-purple-400'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => document.getElementById('fileInput').click()}
              >
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e.target.files[0])}
                  className="hidden"
                />
                <div className="text-center">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                  {formData.paymentScreenshot ? (
                    <div>
                      <p className="text-green-600 font-medium">{formData.paymentScreenshot.name}</p>
                      <p className="text-sm text-gray-500">
                        File uploaded successfully ({(formData.paymentScreenshot.size / 1024 / 1024).toFixed(2)} MB)
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-gray-600">Drag and drop your payment screenshot here</p>
                      <p className="text-sm text-gray-500">or click to browse (JPG, PNG under 5MB)</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Submitting...
                </div>
              ) : (
                <div className="flex items-center">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Registration
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paymentpage;