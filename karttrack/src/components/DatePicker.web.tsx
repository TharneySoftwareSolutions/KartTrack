import React from 'react';

interface Props {
  value: string; // yyyy-mm-dd
  onChange: (date: string) => void;
  textColor: string;
  bgColor: string;
  borderColor: string;
  placeholder: string;
}

export default function DatePicker({ value, onChange, textColor, bgColor, borderColor, placeholder }: Props) {
  return (
    <input
      type="date"
      value={value}
      onChange={(e) => onChange((e.target as HTMLInputElement).value)}
      placeholder={placeholder}
      style={{
        backgroundColor: bgColor,
        color: value ? textColor : '#999',
        border: `1px solid ${borderColor}`,
        borderRadius: 8,
        padding: '12px',
        fontSize: 16,
        width: '100%',
        boxSizing: 'border-box',
        marginBottom: 12,
        outline: 'none',
        cursor: 'pointer',
      }}
    />
  );
}
