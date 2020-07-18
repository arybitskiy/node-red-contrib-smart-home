import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          { text: "FTS05P Flood & Temperature Sensor", name: "Name" },
          {
            text:
              "Water damages are caused by leaking pipes and faulty appliances. Place sensors in areas near water consuming appliances. If a leak occurs, water will puddle and wet the sensor, triggering an alarm.",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/0084:020a:00a3",
            name: "OzwInfoPage",
          },
          {
            text: "https://www.fortrezz.com/shop/flood-sensor-w-probe",
            name: "ProductPage",
          },
          { text: "https://www.fortrezz.com/support", name: "ProductSupport" },
          { text: "images/fortrezz/fts05p.png", name: "ProductPic" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/2458/User%20Manual%20FTS05-FTS05P.pdf",
            name: "ProductManual",
          },
          {
            text:
              "To initiate manual wakeup, press the program button once, while in network. Device stays awake for 10 seconds or longer if communicating with the controller.",
            name: "WakeupDescription",
          },
          {
            text:
              "1) Set up the Add/Inclusion mode at the controller; 2) Briefly press the switch once and the controller will indicate the unit has been added into the network. Also, the LED will blink 2 quick blinks when complete.",
            name: "InclusionDescription",
          },
          {
            text:
              "1) Set up the Remove/Exclusion mode at the controller; 2) Press and hold the switch for approx. 2 seconds and then release. The controller will indicates the unit has been removed from the network. The LED will blink 4 quick blinks when complete.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Reset the device to factory Defaults - Press and hold the program button for longer than 15 seconds. When complete, the LED will flash approx. 30 times. This can be done while the device is either in or out of a network. Please use this procedure only when the network primary controller is missing or otherwise inoperable. Caution – When this is done in-network, the device will no longer be in the network and all configurations and associations will be set to default.",
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/2458",
            id: "020a",
            name: "ZWProductPage",
            type: "00a3",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "020a",
            name: "FrequencyName",
            type: "00a3",
          },
          { text: "FTS05P", id: "020a", name: "Identifier", type: "00a3" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial entry from Z-Wave Alliance Database and from Manufacturer's website.",
                author: "Tommy Long - tommylong@bellsouth.net",
                date: "20 Jan 2020",
                revision: 1,
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
            label: "Temperature Low Threshold",
            max: "255",
            min: "0",
            type: "byte",
            units: "C",
            value: "4",
            Help:
              "\n                        Use this to change the low temperature alarm threshold. Set the range between -10 and 69 deg C.\n\t\t\tNote: The user configuration value is a positive decimal integer 0 through 255, but the device\n                        interprets the value as 8-bit Two's complement.  Examples:\n                           -10 in Two's complement is 246 decimal (0xF6).\n                           -2 in Two's complement is 254 decimal (xFE)\n                           -1 in Two's complement is 255 decimal (xFF)\n                           0 in Two's complement is 0 decimal (0x00).\n                           69 in Two's complement is 69 decimal (0x45).\n                        Thus the valid range the user may enter is 0-69 and 246-255.\n\t\t\t",
          },
          {
            genre: "config",
            index: "2",
            label: "Temperature High Threshold",
            max: "255",
            min: "0",
            type: "byte",
            units: "C",
            value: "70",
            Help:
              "\n                        Use this to change the high temperature alarm threshold. Set the range between -9 and 70 deg C.\n\t\t\tNote: The user configuration value is a positive decimal integer 0 through 255, but the device\n                        interprets the value as 8-bit Two's complement.  Examples:\n                           -9 in Two's complement is 247 decimal (0xF7).\n                           -2 in Two's complement is 254 decimal (xFE)\n                           -1 in Two's complement is 255 decimal (xFF)\n                           0 in Two's complement is 0 decimal (0x00).\n                           70 in Two's complement is 70 decimal (0x46).\n                        Thus the valid range the user may enter is 0-70 and 247-255.\n\t\t\t",
          },
          {
            genre: "config",
            index: "3",
            label: "Normally Wet vs Normally Dry",
            max: "240",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n                        Default is set as a Normally DRY sensor. Use this to switch to Normally WET sensor.\n\t\t\tThe device only accepts one of two possible values:\n                          0   (0x00) - Normally Dry (default).\n                          240 (0xF0) - Normally Wet.\n\t\t\t",
          },
          {
            genre: "config",
            index: "4",
            label: "Water Alarm Association Mode",
            max: "240",
            min: "0",
            type: "byte",
            units: "",
            value: "240",
            Help:
              "\n                        Use this to send basic set ON or Basic Set OFF when an alarm is detected. \n\t\t\tThe device only accepts one of two possible values:\n                          0   (0x00) - For sending basic set OFF when alarm detected.\n                          240 (0xF0) - For sending basic Set ON (default) when alarm detected. \n\t\t\t",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "8",
            Group: [
              { index: "1", label: "LifeLine", max_associations: "2" },
              { index: "2", label: "Water Alarm", max_associations: "2" },
              {
                index: "3",
                label: "High Temperature Alarm",
                max_associations: "2",
              },
              {
                index: "4",
                label: "Low Temperature Alarm",
                max_associations: "2",
              },
              {
                index: "5",
                label: "Temperature Report When Changed",
                max_associations: "2",
              },
              {
                index: "6",
                label: "Temperature Report Every 5 minutes",
                max_associations: "2",
              },
              {
                index: "7",
                label: "Temperature Report Every 20 minutes",
                max_associations: "2",
              },
              {
                index: "8",
                label: "Temperature Report Every 60 minutes",
                max_associations: "2",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
