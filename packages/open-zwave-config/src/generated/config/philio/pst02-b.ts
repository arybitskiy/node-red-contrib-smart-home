import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/013C:000D:0002",
            name: "OzwInfoPage",
          },
          { text: "images/philio/pst02-b.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2860/",
            id: "000D",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text:
              "There are two tamper keys in the device, one is in the back side,\nanother is in the front side. Both of them can add, remove or reset from Z-WaveTM network.\n1. Have Z-WaveTM Controller entered inclusion mode.\n2. Pressing tamper key three times within 1.5 seconds\nto enter the inclusion mode.\n3. After add successful, the device will wake to\nreceive the setting command from Z-WaveTM\nController about 20 seconds",
            name: "InclusionDescription",
          },
          { text: "PST02-5B", id: "000D", name: "Identifier", type: "0002" },
          {
            text:
              "1. Pressing tamper key four times within 1.5 seconds\nand do not release the tamper key in the 4th\npressed, and the LED will light ON.\n2. After 3 seconds the LED will turn OFF, after that\nwithin 2 seconds, release the tamper key. If\nsuccessful, the LED will light ON one second.\nOtherwise, the LED will flash once.\n3. IDs are excluded and all settings will reset to\nfactory default.\n\n*Please use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "After the device adding to the network, it will wake-up once per day in\ndefault. When it wake-up it will broadcast the “Wake Up Notification”\nmessage to the network, and wake-up 10 seconds for receive the\nsetting commands.\nThe wake-up interval minimum setting is 30 minutes, and maximum\nsetting is 120 hours. And the interval step is 30 minutes.\nIf the user want to wake-up the device immediately, please remove the\nfront cover,and press the tamper key once. The device will wake-up 10\nseconds.",
            name: "WakeupDescription",
          },
          { text: "Датчик движения (Motion Sensor)", name: "Name" },
          {
            text:
              "The slim multisensorPST02-5B has PIR, temperature and illumination, 3 sensors function in one,based on Z-Wave technology\nIt is the Z-WaveTM plus product, it support the security, OTA... Those\nnewest features of the Z-WaveTM technology. Z-WaveTM is a wireless\ncommunication protocol designed for home automation, specifically to\nremotely control applications in residential and light commercial\nenvironments. The technology uses a low-power RF radio embedded or\nretrofitted into home electronics devices and systems, such as lighting,\nhome access control, entertainment systems and household appliances.",
            name: "Description",
          },
          {
            text:
              "There are two tamper keys in the device, one is in the back side,\nanother is in the front side. Both of them can add, remove or reset from Z-WaveTM network.\n1. Have Z-WaveTM Controller entered exclusion mode.\n2. Pressing tamper key three times within 1.5 seconds\nto enter the exclusion mode.\nNode ID has been excluded.",
            name: "ExclusionDescription",
          },
          {
            text: "CEPT (Europe) / Russia / Russia",
            id: "000D",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2860/PST02_UserManual.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1090/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2833/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2860/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 6,
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
            index: "2",
            label: "Basic Set Level",
            max: "255",
            min: "-1",
            type: "byte",
            value: "255",
            Help:
              "\n          Setting the BASIC command value to turn on the light. The 0xFF (-1) means turn on the light. \n          For dimmer equipment 1 to 100 means the light strength. 0 means turn off the light.\n\t  ",
          },
          {
            genre: "config",
            index: "3",
            label: "PIR Sensitivity",
            max: "99",
            min: "0",
            type: "byte",
            value: "80",
            Help:
              "\n          PIR sensitivity settings. \n          0 means disable the PIR motion. \n          1 means the lowest sensitivity, \n          99 means the highest sensitivity. \n          High sensitivity means can detected long distance, but if there is more noise signal in the environment, it will re-trigger too frequency.\n       ",
          },
          {
            genre: "config",
            index: "4",
            label: "Light threshold",
            max: "100",
            min: "0",
            type: "byte",
            value: "99",
            Help:
              "\n          Setting the illumination threshold to turn on the light. When the event triggered and the environment illumination lower than \n          the threshold, the device will turn on the light.\n          0 means turn off illumination detected function and never turn on the light.\n          1 means darkest.\n          99 means brightest.\n          100 means turn off illumination detected function. And always turn on the light.\n          * Notice * in none test mode, only the value in 1 to 99 will enable the illumination detected function and update the illumination value.\n       ",
          },
          {
            genre: "config",
            index: "5",
            label: "Operation Mode",
            max: "127",
            min: "0",
            type: "byte",
            value: "4",
            Help:
              "\n          Bit 0: Reserve. \n          Bit 1: 1 means enable test mode, 0 means disable normal mode. Notice: This bit only effect by the DIP Switch setting to program mode. \n          Bit 2: Set to 1.\n          Bit 3: Setting the temperature scale. 0: Fahrenheit, 1:Celsius. \n          Bit 4: Disable the illumination report after event triggered (1: Disable, 0: Enable). \n          Bit 5: Disable the temperature report after event triggered (1: Disable, 0: Enable). \n          Bit 6: Reserve. \n          Bit 7: Disable the back key release into test mode (1: Disable, 0: Enable).\n       ",
          },
          {
            genre: "config",
            index: "6",
            label: "Multi-Sensor Function Switch",
            max: "127",
            min: "0",
            type: "byte",
            value: "5",
            Help:
              "\n          Multi-Sensor Function switch. Using bit to control.\n          Bit 0: Set to 1.\n          Bit 1: Disable PIR integrate Illumination to turn ON the lighting nodes in the association group 2 (1: Disable, 0: Enable). \n          Bit 2: Set to 1.\n          Bit 3: Reserve. \n          Bit 4: Reserve. \n          Bit 5: Reserve. \n          Bit 6: Reserve. \n          Bit 7: Reserve. \n\t  ",
          },
          {
            genre: "config",
            index: "7",
            label: "Customer Function",
            max: "127",
            min: "0",
            type: "byte",
            value: "4",
            Help:
              "\n          Customer function switch, using bit control. \n          Bit 0: Reserve. \n          Bit 1: Enable sending motion OFF report (0:Disable, 1:Enable). \n\t\t\t\t Note: Depends on the Bit4, 0: Report Notification CC, Type: 0x07, Event: 0xFE 1: Sensor Binary Report, Type: 0x0C, Value: 0x00.  \n          Bit 2: Enable PIR super sensitivity mode (0:Disable, 1:Enable).\n          Bit 3: Reserve. \n          Bit 4: Notification Type (0: Notification Report, 1: Sensor Binary Report).\n          Bit 5: Disable Multi CC in auto report (1:Disable, 0:Enable).\n          Bit 6: Disable to report battery state when the device triggered (1:Disable, 0:Enable)\n          Bit 7: Reserve.\n\t\t  ozw recommended setting: 00010110 : 22\n       ",
          },
          {
            genre: "config",
            index: "8",
            label: "PIR re-detect interval time",
            max: "127",
            min: "1",
            type: "byte",
            units: "8 sec",
            value: "3",
            Help:
              "\n          In the normal mode, after the PIR motion detected, setting the re-detect time. 8 seconds per tick, default tick is 3 (24 seconds). \n          Setting the suitable value to prevent received the trigger signal too frequency. Also can save the battery energy. \n          Notice: If this value bigger than the configuration setting NO. 9. There is a period after the light turned off and the PIR not start detecting.\n       ",
          },
          {
            genre: "config",
            index: "9",
            label: "Turn Off Light Time",
            max: "127",
            min: "0",
            type: "byte",
            units: "8 sec",
            value: "4",
            Help:
              "\n          After turn on the lighting, setting the delay time to turn off the lighting when the PIR motion is not detected. \n          8 seconds per tick, default tick is 4 (32 seconds). 0 means never send turn off light command.\n       ",
          },
          {
            genre: "config",
            index: "10",
            label: "Auto Report Battery Time",
            max: "127",
            min: "0",
            type: "byte",
            units: "30 min",
            value: "12",
            Help:
              "\n          The interval time for auto report the battery level. 0 means turn off auto report battery. The default value is 12. The tick time can setting by the configuration No.20.\n      ",
          },
          {
            genre: "config",
            index: "12",
            label: "Auto Report Illumination Time",
            max: "127",
            min: "0",
            type: "byte",
            units: "30 min",
            value: "12",
            Help:
              "\n          The interval time for auto report the illumination. 0 means turn off auto report illumination. The default value is 12. The tick time can setting by the configuration No.20.\n      ",
          },
          {
            genre: "config",
            index: "13",
            label: "Auto Report Temperature time",
            max: "127",
            min: "0",
            type: "byte",
            units: "30 min",
            value: "12",
            Help:
              "\n          The interval time for auto report the temperature. 0 means turn off auto report temperature. The default value is 12. The tick time can setting by the configuration No.20.\n      ",
          },
          {
            genre: "config",
            index: "20",
            label: "Auto Report Tick Interval",
            max: "255",
            min: "0",
            type: "byte",
            value: "30",
            Help:
              "\n          The interval time for auto report each tick. Setting this configuration will effect configuration No.10, No.11, No.12 and No.13. Caution: Setting to 0 means turn off all auto report function.\n      ",
          },
          {
            genre: "config",
            index: "21",
            label: "Temperature Differential Report",
            max: "255",
            min: "0",
            type: "byte",
            value: "1",
            Help:
              '\n          The temperature differential to report. 0 means turn off this function. The unit is Fahrenheit. Enable this function the device will detect every minutes. And when the temperature is over 140 degree Fahrenheit, it will continue report. Enable this functionality will cause some issue please see the detail in the "Temperature Report" section.\n      ',
          },
          {
            genre: "config",
            index: "22",
            label: "Illumination Differential Report",
            max: "255",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              '\n          The illumination differential to report.0 means turn off this function. The unit is percentage. Enable this function the device will detect every minutes. Enable this functionality will cause some issue please see the detail in the "Illumination Report" section.\n      ',
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "8" },
              { index: "2", label: "Light Control", max_associations: "8" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
