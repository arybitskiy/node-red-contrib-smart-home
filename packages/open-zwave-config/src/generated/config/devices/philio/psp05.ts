import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/013C:0050:0002",
            name: "OzwInfoPage",
          },
          { text: "images/philio/psp05.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2068/",
            id: "0050",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text:
              "CEPT (Europe) / Australia / New Zealand / U.S. / Canada / Mexico",
            id: "0050",
            name: "FrequencyName",
            type: "0002",
          },
          { text: "PSP05", id: "0050", name: "Identifier", type: "0002" },
          {
            text:
              "The PIR sensor PSP05 has PIR sensor function,based on Z-Wave™ technology.",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2068/PSP05_manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "There is a button on PSP05.\n1. Pressing button for about 5 seconds.\n2. IDs are excluded and all settings will reset to factory default.\nNotice: Use this procedure only in the event that the primary controller is lost or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "There is a button on PSP05.\n1. Have Z-Wave™  Controller entered inclusion mode.\n2. Pressing button once to enter the inclusion mode.\n3. After add successful, the device will wake to receive the setting command from Z-Wave™ Controller about 20 seconds.",
            name: "InclusionDescription",
          },
          {
            text:
              "There is a button on PSP05.\n1. Have Z-Wave™  Controller entered exclusion mode.\n2. Pressing button once to enter the exclusion mode.",
            name: "ExclusionDescription",
          },
          { text: "Single Function PIR Sensor", name: "Name" },
          {
            text:
              "There is a button on PSP05.\nPress the button once, the device will awake 10 seconds.",
            name: "WakeupDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2002/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2037/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2068/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
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
              "\n          Setting the BASIC command value to turn on the light. The 0xFF (-1) means turn on the light. \n          For dimmer equipment 1 to 100 means the light strength. 0 means turn off the light.\n\t  ",
          },
          {
            genre: "config",
            index: "3",
            label: "PIR sensitivity",
            max: "99",
            min: "0",
            type: "byte",
            value: "80",
            Help:
              "\n          0 means disable the PIR motion.\n          1 means the lowest sensitivity.\n          99 means the highest sensitivity.\n          High sensitivity means can detected long distance, but if there is more noise signal in the invironment, it wil re-trigger too frequent.\n       ",
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
              "\n          Multi-Sensor Function switch. Using bit to control.\n          Bit 0: Reserved always 0 \n          Bit 1: Reserved always 0 \n          Bit 2: Reserved always 1\n          Bit 3: Are the device and the lighting in the same room? 0: In the same room(Default), 1: In the different room.\n          Bit 4: Disable delay 5 seconds to turn off the light, when door/window closed. \n          Bit 5: Disable auto turn off the light, after door/window opened to turn on the light. Notice: If bit2 is zero, this setting is useless. Notice: If the configuration No.9 is zero, this setting is useless. \n          Bit 6: Reserve.\n\t  Bit 7: Reserve.\n\t  ",
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
              "\n          Customer function switch, using bit control. \n          Bit 0: Reserve. \n          Bit 1: Enable sending motion OFF report (0:Disable, 1:Enable). \n\t\t\t\t Note: Depends on the Bit4, 0: Report Notification CC, Type: 0x07, Event: 0xFE 1: Sensor Binary Report, Type: 0x0C, Value: 0x00. \n          Bit 2: Enable PIR super sensitivity mode (0:Disable, 1:Enable).\n          Bit 3: Reserve. \n          Bit 4: Notification Type (0: Notification Report, 1: Sensor Binary Report).\n          Bit 5: Disable Multi CC in auto report (1:Disable, 0:Enable). \n          Bit 6: Disable to report battery state when the device triggered (1:Disable, 0:Enable)\n          Bit 7: Reserve.\n\t       ozw recommended setting: 00010110 : 22\n       ",
          },
          {
            genre: "config",
            index: "8",
            label: "PIR Re-Detect Interval Time",
            max: "127",
            min: "1",
            type: "byte",
            value: "3",
            Help:
              "\n          In the normal mode, after the PIR motion detected, setting the re-detect time, 8 seconds per tick, default tick is 3 (24 seconds).\n          Setting the suitable value to prevent received the trigger signal too frequency. Also can save the battery energy.\n          Notice: If this value bigger than the configuration setting NO. 9. There is a period after the light turned off and the PIR not start detecting. \n       ",
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
            index: "20",
            label: "Auto Report Tick Interval",
            max: "255",
            min: "0",
            type: "byte",
            value: "30",
            Help:
              "\n          The interval time for auto report each tick. Setting this configuration will effect configuration No.10, No.11, No.12 and No.13. Caution: Setting to 0 means turn off all auto report function.\n      ",
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
