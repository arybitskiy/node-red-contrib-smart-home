import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0108:000D:0002",
            name: "OzwInfoPage",
          },
          { text: "images/dlink/dch-z120.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1152/",
            id: "000D",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1152/D-Link DCH-Z110_120 manual.pdf",
            name: "ProductManual",
          },
          {
            text: "CEPT (Europe)",
            id: "000D",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text:
              "There are two tamper keys in the device, one is in the back side, another is in the front side.  Both of them  can add,  remove, reset or association from Z-Wave network.\nPress any key once, the device will awake 10 seconds.",
            name: "WakeupDescription",
          },
          {
            text:
              "The mydlink Z-Wave Motion Sensor DCH-Z120 has PIR, temperature and illumination, 3 sensors function in one,based on Z-Wave technology.",
            name: "Description",
          },
          {
            text:
              "There are two tamper keys in the device, one is in the back side, another is in the front side.  Both of them  can add,  remove, reset or association from Z-Wave network.\nTo add into a Z-Wave network: \n1. Have Z-Wave  Controller entered inclusion mode.\n2. Pressing tamper key three times within 1.5 seconds to enter the inclusion mode.\n3. After add successful, the device will wake to receive the setting command from Z-Wave Controller about 20 seconds.",
            name: "InclusionDescription",
          },
          { text: "DCH-Z120", id: "000D", name: "Identifier", type: "0002" },
          { text: "D-Link Z-Wave Motion Sensor", name: "Name" },
          {
            text:
              "There are two tamper keys in the device, one is in the back side, another is in the front side.  Both of them  can add,  remove, reset or association from Z-Wave network.\nTo reset the device: \nNotice: Use this procedure only in the event that the primary controller is lost or otherwise inoperable.\n1. Pressing tamper key four times within 1.5 seconds and do not release the tamper key in the 4th  pressed, and the LED will light ON.\n2. After 3 seconds the LED will turn OFF, after that within 2 seconds, release the tamper key. If successful, the LED will light ON one second. Otherwise, the LED will flash once.\n3. IDs are excluded and all settings will reset to factory default.",
            name: "ResetDescription",
          },
          {
            text:
              "There are two tamper keys in the device, one is in the back side, another is in the front side.  Both of them  can add,  remove, reset or association from Z-Wave network.\nTo remove the device from a Z-Wave network: \n1. Have Z-Wave  Controller entered exclusion mode.\n2. Pressing tamper key three times within 1.5 seconds to enter the exclusion mode.\nNode ID has been excluded.",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1152/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
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
            min: "0",
            type: "byte",
            value: "255",
            Help:
              "\n          Set the BASIC command value to turn on the light.\n          255: always turn on the light. \n          For dimmer equipment 1 to 100 means the light strength. 0 means turn off the light.\n\t  ",
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
              "\n          PIR sensitivity settings.\n          0 means disable the PIR motion.\n          1 means the lowest sensitivity.\n          99 means the highest sensitivity.\n          High sensitivity means the sensor can detect over a long distance, but if there is more noise signal in the environment, it will re-trigger too frequently.\n\t  ",
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
              "\n          Set the illumination threshold to turn on the light. When the event is triggered and the environment illumination is lower than the threshold, the device will turn on the light.\n          0 means turn off illumination detected function and never turn on the light.\n          1 means darkest.\n          99 means brightest.\n          100 means turn off illumination detected function. And always turn on the light.\n          * Notice * in none test mode, only the value in 1 to 99 will enable the illumination detected function and update the illumination value.\n       ",
          },
          {
            genre: "config",
            index: "5",
            label: "Operation Mode",
            max: "127",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "\n          Bit 0: Reserved \n          Bit 1: 1 means test mode, 0 means normal mode.\n           Notice: This bit only effect by the DIP Switch setting to customer mode, otherwise it decides by DIP Switch setting to Test or Normal Mode.\n          Bit 2: Reserved\n          Bit 3: Setting the temperature scale. 0: Fahrenheit, 1:Celsius. \n          Bit 4: Disable the illumination report after event triggered (1: Disable, 0: Enable). \n          Bit 5: Disable the temperature report after event triggered (1: Disable, 0: Enable).\n          Bit 6: Reserved.\n          Bit 7: Disable the back key release into test mode. (1: Disable, 0: Enable)\n          Note: All default to 0.\n       ",
          },
          {
            genre: "config",
            index: "6",
            label: "Multi-Sensor Function Switch",
            max: "127",
            min: "0",
            type: "byte",
            value: "4",
            Help:
              "\n          Multi-Sensor Function switch. Using bit to control.\n          Bit 0: Reserved. (Default: 0)\n          Bit 1: Disable PIR integrate Illumination to turn ON the lighting nodes in the association group 2. (1:Disable, 0:Enable) (Default: 0)\n          Bit 2: Reserved always 1\n          Bit 3: Reserved always 0\n          Bit 4: Reserved always 0 \n          Bit 5: Reserved always 0\n          Bit 6: Reserved always 0\n          Bit 7: Reserved always 0\n\t  ",
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
              "\n          Customer function switch, using bit control. \n          Bit 0: Reserved always 0. \n          Bit 1: Enable sending motion OFF report. Note: Depends on the Bit4, 0: Report Notification CC, Type: 0x07, Event: 0xFE 1: Sensor Binary Report, Type: 0x0C, Value: 0x00.  (Default: 0)\n          Bit 2: Enable PIR super sensitivity mode. (Default: 1) \n          Bit 3: Reserved always 0\n          Bit 4: Notification Type, 0: Using Notification Report. 1: Using Sensor Binary Report. (Default: 0)\n          Bit 5: Disable Multi CC in auto report. (Default: 0)\n          Bit 6: Disable to report battery state when the device triggered. (1:Disable, 0:Enable) (Default: 0) \n          Bit 7: Reserved always 0.\n       ",
          },
          {
            genre: "config",
            index: "8",
            label: "PIR Re-Detect Interval Time",
            max: "127",
            min: "1",
            type: "byte",
            units: "8 sec",
            value: "3",
            Help:
              "\n          In the normal mode, after the PIR motion detected, setting the re-detect time. 8 seconds per tick, default tick is 3 (24 seconds). Set a suitable value to prevent receiving the trigger signal too frequently. Also can save the battery energy. Notice: If this value bigger than the configuration setting NO. 9 there will be a period after the light turned off where the PIR is not detecting.\n       ",
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
              "\n          The interval time for auto report the battery level. 0 means turn off auto report battery. The default value is 12. The tick time can be set by the configuration No.20.\n      ",
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
              "\n          The interval time for auto reporting of the illumination. 0 means turn off auto report illumination. The default value is 12. The tick time can be set by the configuration No.20.\n      ",
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
              "\n          The interval time for auto report the temperature. 0 means turn off auto report temperature. The default value is 12. The tick time can be set by the configuration No.20.\n      ",
          },
          {
            genre: "config",
            index: "20",
            label: "Auto Report Tick Interval",
            max: "255",
            min: "0",
            type: "byte",
            units: "mins",
            value: "30",
            Help:
              "\n          The interval time for auto report each tick. Setting this configuration will effect configuration No.10, No.11, No.12 and No.13. Caution: Setting to 0 means turn off all auto report function. Default is 30 minutes\n      ",
          },
          {
            genre: "config",
            index: "21",
            label: "Temperature Differential Report",
            max: "127",
            min: "0",
            type: "byte",
            units: "deg F",
            value: "1",
            Help:
              '\n          The temperature differential to report. 0 means turn off this function. The unit is Fahrenheit. Enable this function the device will detect every minutes. And when the temperature is over 140 degree Fahrenheit, it will continue report. Enable this functionality will cause some issue please see the detail in the "Temperature Report" section.\n      ',
          },
          {
            genre: "config",
            index: "22",
            label: "Illumination Differential Report",
            max: "99",
            min: "0",
            type: "byte",
            units: "%",
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
              { index: "1", label: "Reports", max_associations: "8" },
              { index: "2", label: "Light Control", max_associations: "8" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
