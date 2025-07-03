const MobileLayout = ({ children }) => {
  return (
    <div>
      {/* You can customize this message */}
      <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Mobile View</p>
      {children}
    </div>
  );
};

export default MobileLayout;
