import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Platform, StyleSheet } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';

interface Props {
  value: string; // yyyy-mm-dd
  onChange: (date: string) => void;
  textColor: string;
  bgColor: string;
  borderColor: string;
  placeholder: string;
  mainColor: string;
}

export default function DatePicker({ value, onChange, textColor, bgColor, borderColor, placeholder, mainColor }: Props) {
  const [show, setShow] = useState(false);
  const dateObj = value ? new Date(value) : new Date();

  const handleChange = (_event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShow(false);
      if (_event.type === 'set' && selectedDate) {
        onChange(selectedDate.toISOString().split('T')[0]);
      }
    } else if (selectedDate) {
      onChange(selectedDate.toISOString().split('T')[0]);
    }
  };

  const formatDisplay = (dateStr: string) => {
    if (!dateStr) return placeholder;
    const [y, m, d] = dateStr.split('-');
    return `${d}/${m}/${y}`;
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={[styles.trigger, { backgroundColor: bgColor, borderColor }]}
        onPress={() => setShow(true)}
        activeOpacity={0.7}
      >
        <Text style={{ color: value ? textColor : '#999', fontSize: 16 }}>
          {formatDisplay(value)}
        </Text>
      </TouchableOpacity>

      {show && Platform.OS === 'ios' && (
        <Modal transparent animationType="fade" onRequestClose={() => setShow(false)}>
          <View style={styles.overlay}>
            <View style={[styles.iosBox, { backgroundColor: bgColor }]}>
              <RNDateTimePicker
                value={dateObj}
                mode="date"
                display="spinner"
                onChange={handleChange}
                textColor={textColor}
              />
              <TouchableOpacity
                style={[styles.confirmBtn, { backgroundColor: mainColor }]}
                onPress={() => setShow(false)}
              >
                <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      {show && Platform.OS === 'android' && (
        <RNDateTimePicker
          value={dateObj}
          mode="date"
          display="default"
          onChange={handleChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 12,
  },
  trigger: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iosBox: {
    borderRadius: 12,
    padding: 16,
    width: 320,
  },
  confirmBtn: {
    marginTop: 12,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
});
