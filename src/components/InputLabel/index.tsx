import React from 'react';

const InputLabel: React.FC<{ label: string }> = ({ label }) => (
  <h5 style={{ fontSize: '0.9rem', marginBottom: 4 }}>{label}</h5>
);

export default InputLabel;
