import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 11,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/013C:000C:0002",
            name: "OzwInfoPage",
          },
          { text: "images/philio/pst02.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2568/",
            id: "000C",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text:
              "There are two tamper keys in the device, one is in the back side, another is in the front side.  Both of them  can add,  remove, reset or association from Z-Wave network.\nTo remove the device from a Z-Wave network: \n1. Have Z-Wave  Controller entered exclusion mode.\n2. Pressing tamper key three times within 1.5 seconds to enter the exclusion mode.\nNode ID has been excluded.",
            name: "ExclusionDescription",
          },
          {
            text:
              "There are two tamper keys in the device, one is in the back side, another is in the front side.  Both of them  can add,  remove, reset or association from Z-Wave network.\nPress any key once, the device will awake 10 seconds.",
            name: "WakeupDescription",
          },
          {
            text:
              "The slim multisensor PST02 has PIR, door/window, temperature and illumination, 4 sensors function in one,based on Z-Wave technology.",
            name: "Description",
          },
          { text: "Slim Multisensor", name: "Name" },
          {
            text:
              "There are two tamper keys in the device, one is in the back side, another is in the front side.  Both of them  can add,  remove, reset or association from Z-Wave network.\nTo add into a Z-Wave network: \n1. Have Z-Wave  Controller entered inclusion mode.\n2. Pressing tamper key three times within 1.5 seconds to enter the inclusion mode.\n3. After add successful, the device will wake to receive the setting command from Z-Wave Controller about 20 seconds.",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2568/PST02_Manual.pdf",
            name: "ProductManual",
          },
          {
            text: "CEPT (Europe) / Australia / New Zealand",
            id: "000C",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text:
              "There are two tamper keys in the device, one is in the back side, another is in the front side.  Both of them  can add,  remove, reset or association from Z-Wave network.\nTo reset the device: \nNotice: Use this procedure only in the event that the primary controller is lost or otherwise inoperable.\n1. Pressing tamper key four times within 1.5 seconds and do not release the tamper key in the 4th  pressed, and the LED will light ON.\n2. After 3 seconds the LED will turn OFF, after that within 2 seconds, release the tamper key. If successful, the LED will light ON one second. Otherwise, the LED will flash once.\n3. IDs are excluded and all settings will reset to factory default.",
            name: "ResetDescription",
          },
          { text: "PST02-A", id: "000C", name: "Identifier", type: "0002" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1087/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1449/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 7,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2433/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 8,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2434/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 9,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2568/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 10,
              },
              {
                text: "Fix Philio door sensors #1898",
                author: "gizmocuz - ",
                date: "28 Jul 2019",
                revision: 11,
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
            max: "100",
            min: "-1",
            size: "1",
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
            size: "1",
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
            size: "1",
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
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n          Bit 0: Reserve. \n          Bit 1: 1 means enable test mode, 0 means disable normal mode. Notice: This bit only effect by the DIP Switch setting to program mode. \n          Bit 2: Disable the door/window function (1: Disable, 0: Enable). \n          Bit 3: Setting the temperature scale. 0: Fahrenheit, 1:Celsius. \n          Bit 4: Disable the illumination report after event triggered (1: Disable, 0: Enable). \n          Bit 5: Disable the temperature report after event triggered (1: Disable, 0: Enable). \n          Bit 6: Reserve. \n          Bit 7: Disable the back key release into test mode (1: Disable, 0: Enable).\n       ",
          },
          {
            genre: "config",
            index: "6",
            label: "Multi-Sensor Function Switch",
            max: "127",
            min: "0",
            size: "1",
            type: "byte",
            value: "4",
            Help:
              "\n          Multi-Sensor Function switch. Using bit to control.\n          Bit 0: Disable magnetic integrate illumination to turn ON the lighting nodes in the association group 2 (1: Disable, 0: Enable). \n          Bit 1: Disable PIR integrate Illumination to turn ON the lighting nodes in the association group 2 (1: Disable, 0: Enable). \n          Bit 2: Disable magnetic integrate PIR to turn ON the light the nodes in the association group 2 (1: Disable, 0: Enable) (Default is Disable).\n          Bit 3: When Bit 2 is 0 (Enable), Are the device and the lighting in the same room? 0: In the same room (Default), 1: In the different room. Notice: If this bit is 1, it is recommended also set the Bit1 to 1, cause the PIR triggered, doesn't mean the people in that room. \n          Bit 4: Disable delay 5 seconds to turn off the light, when door/window closed. \n          Bit 5: Disable auto turn off the light, after door/window opened to turn on the light. Notice: If bit2 is zero, this setting is useless. Notice: If the configuration No.9 is zero, this setting is useless. \n          Bit 6: Reserve. \n          Bit 7: Reserve. \n\t  ",
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
              "\n          Customer function switch, using bit control. \n          Bit 0: Reserve. \n          Bit 1: Enable sending motion OFF report (0:Disable, 1:Enable). \n\t\t\t\t Note: Depends on the Bit4, 0: Report Notification CC, Type: 0x07, Event: 0xFE 1: Sensor Binary Report, Type: 0x0C, Value: 0x00. \n          Bit 2: Enable PIR super sensitivity mode (0:Disable, 1:Enable).\n          Bit 3: Disable send out BASIC OFF after door closed (1:Disable, 0:Enable). \n          Bit 4: Notification Type (0: Notification Report, 1: Sensor Binary Report).\n          Bit 5: Disable Multi CC in auto report (1:Disable, 0:Enable). \n          Bit 6: Disable to report battery state when the device triggered (1:Disable, 0:Enable) \n          Bit 7: Reserve.\n\t\t  ozw recommended setting: 00010110 : 22\n       ",
          },
          {
            genre: "config",
            index: "8",
            label: "PIR re-detect interval time",
            max: "127",
            min: "1",
            size: "1",
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
            size: "1",
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
            size: "1",
            type: "byte",
            units: "30 min",
            value: "12",
            Help:
              "\n          The interval time for auto report the battery level. 0 means turn off auto report battery. The default value is 12. The tick time can setting by the configuration No.20.\n      ",
          },
          {
            genre: "config",
            index: "11",
            label: "Auto Report Door/Window State Time",
            max: "127",
            min: "0",
            size: "1",
            type: "byte",
            units: "30 min",
            value: "12",
            Help:
              "\n          The interval time for auto report the door/window state. 0 means turn off auto report door/window state. The default value is 12. The tick time can setting by the configuration No.20.\n      ",
          },
          {
            genre: "config",
            index: "12",
            label: "Auto Report Illumination Time",
            max: "127",
            min: "0",
            size: "1",
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
            size: "1",
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
        id: "48",
        Instance: [{ index: "1" }],
        Value: [
          {
            genre: "user",
            index: "0",
            instance: "1",
            label: "Motion Sensor",
            max: "0",
            min: "0",
            read_only: "true",
            type: "bool",
            value: "false",
            write_only: "false",
          },
          {
            genre: "user",
            index: "1",
            instance: "1",
            label: "Door/Window Sensor",
            read_only: "true",
            type: "bool",
            value: "false",
            write_only: "false",
          },
          {
            genre: "user",
            index: "2",
            instance: "1",
            label: "Tamper Sensor",
            max: "0",
            min: "0",
            read_only: "true",
            type: "bool",
            value: "false",
            write_only: "false",
          },
        ],
        SensorMap: [
          { index: "0", type: "12" },
          { index: "1", type: "10" },
          { index: "2", type: "8" },
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
