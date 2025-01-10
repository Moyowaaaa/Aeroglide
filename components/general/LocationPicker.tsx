import { colors, isAndroid, textType } from "@/constants";
import { location } from "@/constants/types";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ItemPickerProps {
  items: location[];
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  onSelect: (item: location) => void;
  selectedValue: location;
}

const LocationPicker = ({
  items,
  onSelect,
  selectedValue,
  setShow,
  show,
}: ItemPickerProps) => {
  return (
    <>
      {isAndroid ? (
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => onSelect(itemValue)}
          style={styles.picker}
        >
          {items.map((location) => (
            <Picker.Item
              key={location.name}
              label={location.name}
              value={location}
              color={colors.darkGrey}
            />
          ))}
        </Picker>
      ) : (
        <>
          <TouchableOpacity
            style={styles.iosPickerTrigger}
            onPress={() => setShow(true)}
          >
            <Text
              style={{
                ...textType.paragraph,
                color: colors.darkGrey,
                paddingLeft: 6,
              }}
            >
              {selectedValue?.name || "Select a location"}
            </Text>
          </TouchableOpacity>

          <Modal
            visible={show}
            animationType="slide"
            style={{ height: 200 }}
            transparent={true}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Picker
                  selectedValue={selectedValue}
                  onValueChange={(itemValue) => {
                    onSelect(itemValue);
                  }}
                  style={styles.picker}
                >
                  {items.map((location) => (
                    <Picker.Item
                      key={location?.name}
                      label={location?.name}
                      value={location}
                      color={colors.darkGrey}
                    />
                  ))}
                </Picker>

                <TouchableOpacity onPress={() => setShow(false)}>
                  <Text style={styles.doneButton}>Done</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </>
      )}
    </>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  iosPickerTrigger: {
    paddingVertical: 16,
    borderColor: "#ccc",
  },
  picker: {
    width: "100%",
  },
  modalContainer: {
    position: "absolute",
    bottom: 20,
    height: 100,
    width: "100%",
    justifyContent: "flex-end",
    // backgroundColor: "none",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalContent: {
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  doneButton: {
    textAlign: "center",
    color: "#007BFF",
    marginTop: 8,
    marginBottom: 32,
  },
});
