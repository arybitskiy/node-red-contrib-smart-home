import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0108:000E:0002",
            name: "OzwInfoPage",
          },
          { text: "images/dlink/dch-z110.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1151/",
            id: "000E",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text: "CEPT (Europe)",
            id: "000E",
            name: "FrequencyName",
            type: "0002",
          },
          { text: "D-Link Z-Wave Door/Window Sensor", name: "Name" },
          {
            text:
              "There are two tamper keys in the device, one is in the back side, another is in the front side.  Both of them  can add,  remove, reset or association from Z-Wave network.\nPress any key once, the device will awake 10 seconds.",
            name: "WakeupDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1151/D-Link DCH-Z110_120 manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "There are two tamper keys in the device, one is in the back side, another is in the front side.  Both of them  can add,  remove, reset or association from Z-Wave network.\nTo remove the device from a Z-Wave network: \n1. Have Z-Wave  Controller entered exclusion mode.\n2. Pressing tamper key three times within 1.5 seconds to enter the exclusion mode.\nNode ID has been excluded.",
            name: "ExclusionDescription",
          },
          {
            text:
              "There are two tamper keys in the device, one is in the back side, another is in the front side.  Both of them  can add,  remove, reset or association from Z-Wave network.\nTo add into a Z-Wave network: \n1. Have Z-Wave  Controller entered inclusion mode.\n2. Pressing tamper key three times within 1.5 seconds to enter the inclusion mode.\n3. After add successful, the device will wake to receive the setting command from Z-Wave Controller about 20 seconds.",
            name: "InclusionDescription",
          },
          { text: "DCH-Z110", id: "000E", name: "Identifier", type: "0002" },
          {
            text:
              "There are two tamper keys in the device, one is in the back side, another is in the front side.  Both of them  can add,  remove, reset or association from Z-Wave network.\nTo reset the device: \nNotice: Use this procedure only in the event that the primary controller is lost or otherwise inoperable.\n1. Pressing tamper key four times within 1.5 seconds and do not release the tamper key in the 4th  pressed, and the LED will light ON.\n2. After 3 seconds the LED will turn OFF, after that within 2 seconds, release the tamper key. If successful, the LED will light ON one second. Otherwise, the LED will flash once.\n3. IDs are excluded and all settings will reset to factory default.",
            name: "ResetDescription",
          },
          {
            text:
              "The mydlink Z-Wave Door/Window Sensor DCH-Z110 has door/window, temperature and illumination, 3 sensors function in one,based on Z-Wave technology.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1151/xml",
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
            label: "2. Basic Set Level",
            max: "100",
            min: "-1",
            type: "byte",
            value: "-1",
            Help:
              "\n          Setting the BASIC command value to turn on the light. The 0xFF (-1) means turn on the light. \n          For dimmer equipment 1 to 100 means the light strength. 0 means turn off the light.\n\t  ",
          },
          {
            genre: "config",
            index: "4",
            label: "4. Light threshold",
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
            label: "5. Operation Mode",
            max: "127",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "\n          Bit 0: Reserved \n          Bit 1: Reserved \n          Bit 2: Disable the door/window function (1: Disable, 0: Enable). \n          Bit 3: Setting the temperature scale. 0: Fahrenheit, 1:Celsius. \n          Bit 4: Disable the illumination report after event triggered (1: Disable, 0: Enable). \n          Bit 5: Disable the temperature report after event triggered (1: Disable, 0: Enable).\n       ",
          },
          {
            genre: "config",
            index: "6",
            label: "6. Multi-Sensor Function Switch",
            max: "127",
            min: "0",
            type: "byte",
            value: "4",
            Help:
              "\n          Multi-Sensor Function switch. Using bit to control.\n          Bit 0: Disable magnetic integrate illumination to turn ON the lighting nodes in the association group 2 (1: Disable, 0: Enable). \n          Bit 1: Reserved always 1 \n          Bit 2: Reserved always 1\n          Bit 3: Reserved\n          Bit 4: Disable delay 5 seconds to turn off the light, when door/window closed. \n          Bit 5: Disable auto turn off the light, after door/window opened to turn on the light. Notice: If bit2 is zero, this setting is useless. Notice: If the configuration No.9 is zero, this setting is useless. \n          Bit 6: Enable temperature monitoring. When this bit enabled the temperature changed 3 degree Fahrenheit. It will report. And also temp above 140 it will report every 64 seconds.\n\t  ",
          },
          {
            genre: "config",
            index: "7",
            label: "7. Customer Function",
            max: "127",
            min: "0",
            type: "byte",
            value: "4",
            Help:
              "\n          Customer function switch, using bit control. \n          Bit 0: Reserve. \n          Bit 1: Enable sending motion OFF report. Note: Depends on the Bit4, 0: Report Notification CC, Type: 0x07, Event: 0xFE 1: Sensor Binary Report, Type: 0x0C, Value: 0x00. \n          Bit 2: Enable PIR super sensitivity mode. \n          Bit 3: Enable don't send out BASIC OFF after door closed. \n          Bit 4: Notification Type, 0: Using Notification Report. 1: Using Sensor Binary Report. \n          Bit 5: Disable Multi CC in auto report. \n          Bit 6: Disable to report battery state when the device triggered. \n          Bit 7: Reserve.\n       ",
          },
          {
            genre: "config",
            index: "9",
            label: "9. Turn Off Light Time",
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
            label: "10. Auto Report Battery Time",
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
            index: "11",
            label: "11. Auto Report Door/Window State Time",
            max: "127",
            min: "0",
            type: "byte",
            units: "30 min",
            value: "12",
            Help:
              "\n          The interval time for auto report the door/window state. 0 means turn off auto report door/window state. The default value is 12. The tick time can setting by the configuration No.20.\n      ",
          },
          {
            genre: "config",
            index: "12",
            label: "12. Auto Report Illumination Time",
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
            label: "13. Auto Report Temperature time",
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
            label: "20. Auto Report Tick Interval",
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
            label: "21. Temperature Differential Report",
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
            label: "22. Illumination Differential Report",
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
