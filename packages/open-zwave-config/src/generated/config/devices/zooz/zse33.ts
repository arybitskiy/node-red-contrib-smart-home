import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/027A:0088:0003",
            name: "OzwInfoPage",
          },
          { text: "images/zooz/zse33.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2175/",
            id: "0088",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "Zooz Z-Wave Plus Smart Chime", name: "Name" },
          {
            text:
              "Auto Inclusion:\n1. Put your Z-Wave controller in inclusion mode\n2. Carefully remove the cover from the device\n3. Remove the plastic pull-tab from the battery slot – the Chime will automatically enter inclusion mode for 20 seconds\n4. A new alarm siren / doorbell device will appear on your controller's device list\n\nManual Inclusion:\n1. Bring the Smart Chime within direct range of your controller\n2. Carefully remove the cover from the device\n3. Remove the plastic pull-tab from the battery slot. The LED indicator will blink slowly\n4. Put your Z-Wave controller in inclusion mode\n5. Press and release the Z-Wave button on the Smart Chime 3 TIMES quickly. The LED indicator\n will flash quickly\n6. A new alarm siren / doorbell device will appear on your controller's device list (if it connects as an on/off switch, you may need to change the device type manually. Contact us for instructions).",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2175/zooz-z-wave-plus-smart-chime-zse33-user-manual-online.pdf",
            name: "ProductManual",
          },
          {
            text:
              "When your network’s primary controller is missing or otherwise inoperable, you may need to reset the device to factory settings manually. To complete the process, make sure the Smart Chime is powered on, then PRESS AND HOLD the Z-Wave button for AT LEAST 10 SECONDS until the LED indicator flashes ONCE. Release the button. NOTE: All previously recorded activity and custom settings will be erased from the device’s memory.",
            name: "ResetDescription",
          },
          {
            text:
              "Product features:\n- Audio and visual notifications triggered by other Z-Wave devices or scheduled in your routine\n- Choose from 10 different sounds for chime and siren modes\n- Advanced configuration available\n- Powerful long-lasting batteries \n- Z-Wave Plus with improved 500 chip for faster and safer wireless communication\n- Small size and quick installation \n\nSpecifications:\nModel Number: ZSE33\nZ-Wave Signal Frequency: 908.42 MHz\nPower: 2 CR123 batteries (included)\nPower Consumption: 2W\nOperating Temperature: 32 – 104 F\nRange: Up to 100 feet line of sight\nInstallation and Use: Indoor only\nDimensions: 2.7” x 1.2” \nWeight: 3 oz",
            name: "Description",
          },
          {
            text:
              "1. Make sure the Smart Chime is powered on and located within direct range of your Z-Wave gateway controller\n2. Put your Z-Wave controller in exclusion mode\n3. Press and release the Z-Wave button 3 TIMES quickly. The LED indicator will flash quickly \n4. The Smart Chime should disappear from your controller's device list\nIf the first attempt is unsuccessful, please repeat the process following all steps carefully.",
            name: "ExclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0088",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text: "Press and release the Z-Wave button three times.",
            name: "WakeupDescription",
          },
          { text: "ZSE33", id: "0088", name: "Identifier", type: "0003" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2175/xml",
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
            label: "Siren Volume",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "3",
            Help:
              "\n                Siren volume level; low, medium, high (default).\n            ",
            Item: [
              { label: "Low", value: "1" },
              { label: "Medium", value: "2" },
              { label: "High", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Siren Alarm Duration",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "\n                Duration of siren alarm.  Default is 30 seconds.\n            ",
            Item: [
              { label: "Off", value: "0" },
              { label: "30 seconds", value: "1" },
              { label: "60 seconds", value: "2" },
              { label: "5 minutes", value: "3" },
              { label: "Until battery drains", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Doorbell Chime Sound Duration",
            max: "255",
            min: "0",
            type: "byte",
            units: "times",
            value: "1",
            Help:
              "\n                How many times the doorbell chime should repeat once triggered by a BASIC_SET alarm command from a door sensor. 0 is chime off, 1-254 is the number of cycles, 255 is chime continues until battery drains. 2 cycles is default.\n            ",
          },
          {
            genre: "config",
            index: "4",
            label: "Doorbell Chime Volume",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "3",
            Help:
              "\n                Doorbell chime volume level; low, medium, high (default).\n            ",
            Item: [
              { label: "Low", value: "1" },
              { label: "Medium", value: "2" },
              { label: "High", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Siren Alarm Tone",
            max: "10",
            min: "1",
            type: "byte",
            units: "",
            value: "10",
            Help:
              "\n                Chose one of the 10 different tones for the alarm siren.  10 is default.\n            ",
          },
          {
            genre: "config",
            index: "6",
            label: "Doorbell Chime Tone",
            max: "10",
            min: "1",
            type: "byte",
            units: "",
            value: "4",
            Help:
              "\n                Chose one of the 10 different tones for the doorbell chime.  4 is default.\n            ",
          },
          {
            genre: "config",
            index: "7",
            label: "Siren Alarm or Doorbell Chime Mode",
            max: "2",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "2",
            Help:
              "\n                Choose between Siren Alarm (configured by Siren Alarm parameters) or Doorbell Chime (configured by Doorbell Chime paramenters).  Doorbell Chime enabled by default.\n            ",
            Item: [
              { label: "Siren Alarm", value: "1" },
              { label: "Doorbell Chime", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "8",
            label: "LED Notification for Siren Alarm",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "\n                Enable or disable visual LED alarm for Siren Mode.  The LED will blink when triggered.  Enabled by default.\n            ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "9",
            label: "LED Notification for Doorbell Chime",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "\n                Enable or disable visual LED for Doorbell Chime mode.  The LED will blink when triggered.  Enabled by default.\n            ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
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
              { index: "1", label: "Lifeline", max_associations: "5" },
              {
                index: "2",
                label: "Switch binary report",
                max_associations: "5",
              },
              {
                index: "3",
                label: "Notification report",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
