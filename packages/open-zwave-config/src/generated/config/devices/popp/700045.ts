import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0154:0002:0005",
            name: "OzwInfoPage",
          },
          { text: "images/popp/700045.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2481/",
            id: "0002",
            name: "ZWProductPage",
            type: "0005",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2481/POPE700045Manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Turn into Management Mode (remove cover), hit button 2 and confirm with * (Star Key)",
            name: "ExclusionDescription",
          },
          {
            text:
              "This keypad is a security enabled Z-Wave Plus product. An security enabled Z-Wave controller must be used to fully utilize this product. The keypad allows securely controlling devices  - such as door locks   - and trigger actions in a gateway – such as arm/disarm alarm system– based on the entry of certain key codes. Additionally a bell key allows emulating a doorbell by operating e.g. a chimney or a light or both.   \n \nThe device can operate in two different modes. The mode is chosen the way the device is included into a Z-Wave network:\n(a) Stand Alone Mode. In this case the keypad acts as the primary network controller and will include other devices such as e.g. a strike lock control or a chimney. No other central controller is needed. The management of user codes is done using the keypad itself.\n(b) Network Mode. The keypad is included as additional device into an exiting network. In Z-Wave terms it will then act as secondary controller. It will send commands to a central controller and is managed by this controller. In this mode the device can still directly control door locks but it can also be used to trigger scenes in a central controller. \nThe device is protected by a tamper switch sending out an alarm message when the enclosure is opened.",
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "0002",
            name: "FrequencyName",
            type: "0005",
          },
          { text: "Hit the RING button", name: "WakeupDescription" },
          { text: "Z-Wave Keypad", name: "Name" },
          {
            text:
              "Turn into Management Mode  (remove cover),  hit button 5 and keep button * (star key) pushed for 10 seconds. This procedure should only be used when the primary controller is inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "Turn into Management Mode (remove cover), hit button 1 and confirm with * (Star Key)",
            name: "InclusionDescription",
          },
          { text: "700045", id: "0002", name: "Identifier", type: "0005" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2481/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
            label: "Door Lock Automatic Secure Timeout",
            max: "127",
            min: "0",
            size: "1",
            type: "byte",
            units: "seconds",
            value: "0",
            Help:
              "\n                After this time a CLOSE command is sent to the controlled door lock.\n                On default no CLOSE command is sent assuming that the strike lock has its own timeout set.\n                Default Value: 0\n            ",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Ring Button Press Basic Command OFF Timeout",
            max: "127",
            min: "3",
            size: "1",
            type: "byte",
            units: "seconds",
            value: "3",
            Help:
              "\n                After this time the Door Bell will receive an OF command regardless of the actual button is pressed or not.\n                Default Value: 3\n            ",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Ring Button ON Command",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "255",
            Help:
              "\n                This value is sent into Association Group 3 when the door bell button is pressed.\n                Default Value: 255\n            ",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Ring Button OFF Command",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n                This value is sent into Association Group 3 when the door bell button is released or the timeout has reached.\n                Default Value: 0\n            ",
          },
          {
            genre: "config",
            index: "5",
            label: "Central Scene ID for User Codes",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "This parameter defines if different user codes shall cause individual or similar scene ID sent to the main controller.",
            Item: [
              { label: "Constant Scene ID", value: "0" },
              { label: "Individual User Codes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "6",
            label: "Buzzer Confirmation",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Buzzer Confirmation",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
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
              { index: "1", label: "Lifeline", max_associations: "10" },
              {
                index: "2",
                label: "Lock door control",
                max_associations: "10",
              },
              { index: "3", label: "Ring button", max_associations: "10" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
