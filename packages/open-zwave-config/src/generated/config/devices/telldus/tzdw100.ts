import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0176:0001:0005",
            name: "OzwInfoPage",
          },
          { text: "images/telldus/tzdw100.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1455/",
            id: "0001",
            name: "ZWProductPage",
            type: "0005",
          },
          {
            text:
              "Start the exclusion mode on the Z-Wave controller. Press the button on the device three times fast. The device will now be removed from the Z-Wave-network.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1455/Quickguide_Sensor_Switch_107x153mm_PMS.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Automatically add device to network\nWhen a battery is inserted, the device is in automatical add mode for one minute (Network Wide Inclusion, NWI). This means that the device is added automatically when the Z-Wave controller enters add mode. \n\nManual add device to network\nStart the add mode on the Z-Wave controller. Press the button on the device three times fast. The device will now be added into the Z-Wave-network.",
            name: "InclusionDescription",
          },
          {
            text:
              "Press the button on the sensor one time short to wake up the device.",
            name: "WakeupDescription",
          },
          { text: "Door/window sensor", name: "Name" },
          {
            text:
              "Press and hold the button until the LED starts flashing (approx. 6 seconds).\nPress the button once more, short. \nThe device will now reset to factory defaults. The LED will now flash, indicating that it’s no longer added in any Z-Wave network.\n\nPlease note! Only use the reset procedure when the primary controller is missing or inoperable.",
            name: "ResetDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0005",
          },
          { text: "TZDW-100", id: "0001", name: "Identifier", type: "0005" },
          {
            text:
              "This magnet sensor contains the latest Z-Wave technology with the ability to remotely control other Z-Wave units available in your network. The fact that it is battery operated and so small you can virtually place it anywhere you want – on doors, windows or drawers, without the need of wiring. Screw or tape up the holder and then click the sensor in place. Done! The sensor is designed to be seen as little as possible and we have made it significantly smaller than other sensors. It consists of two parts that will merge into a stylish unit when the sensor is closed.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1455/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 2,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Type of command no. 2",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Type of input no. 2, what the input 1 will report if no contact is made",
            Item: [
              { label: "Basic", value: "0" },
              { label: "Switch Binary", value: "1" },
              { label: "Switch All", value: "2" },
              { label: "Switch Multilevel", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Forced Level of Dimming group 2",
            max: "255",
            min: "1",
            type: "byte",
            value: "255",
            Help:
              "Possible parameter settings: (1 - 63) and 255. When setting 255 will automatically be set dimmer to the previous condition i.e 30% or what the last state was.",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Type of commands no. 2",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Type of commands to association group 2",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Inverted", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Type of command no. 3",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Type of input no. 3, what the input 3 will report if no contact is made",
            Item: [
              { label: "Basic", value: "0" },
              { label: "Switch Binary", value: "1" },
              { label: "Switch All", value: "2" },
              { label: "Switch Multilevel", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Forced Level of Dimming group 3",
            max: "255",
            min: "1",
            type: "byte",
            value: "255",
            Help:
              "Possible parameter settings: (1 - 63) and 255. When setting 255 will automatically be set dimmer to the previous condition i.e 30% or what the last state was.",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Type of commands no. 3",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Type of commands to association group 3",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Inverted", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Status change signalled by LED",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Status change signalled by LED. Default setting: LED turned On",
            Item: [
              { label: "LED turned Off", value: "0" },
              { label: "LED turned On", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Sent in the Lifeline",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Select the type of command to be sent in the Lifeline",
            Item: [
              { label: "Notification", value: "0" },
              { label: "Sensor binary", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Sensor changes", max_associations: "10" },
              { index: "3", label: "Opened only", max_associations: "10" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
