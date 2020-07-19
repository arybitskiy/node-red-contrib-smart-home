import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0175:000E:0002",
            name: "OzwInfoPage",
          },
          { text: "images/devolo/mt02648.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1130/",
            id: "000E",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text:
              "There are two tamper keys in the device, one is in the back side, another is in the front side.  Both of them  can add,  remove, reset or association from Z-Wave network.\nTo add into a Z-Wave network: \n1. Have Z-Wave  Controller entered inclusion mode.\n2. Pressing tamper key three times within 1.5 seconds to enter the inclusion mode.\n3. After add successful, the device will wake to receive the setting command from Z-Wave Controller about 20 seconds.",
            name: "InclusionDescription",
          },
          {
            text:
              "There are two tamper keys in the device, one is in the back side, another is in the front side.  Both of them  can add,  remove, reset or association from Z-Wave network.\nTo remove the device from a Z-Wave network: \n1. Have Z-Wave  Controller entered exclusion mode.\n2. Pressing tamper key three times within 1.5 seconds to enter the exclusion mode.\nNode ID has been excluded.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1130/Devolo home Control Door-Window.pdf",
            name: "ProductManual",
          },
          {
            text:
              "There are two tamper keys in the device, one is in the back side, another is in the front side.  Both of them  can add,  remove, reset or association from Z-Wave network.\nPress any key once, the device will awake 10 seconds.",
            name: "WakeupDescription",
          },
          { text: "Door/Window Contact", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "000E",
            name: "FrequencyName",
            type: "0002",
          },
          { text: "MT02648", id: "000E", name: "Identifier", type: "0002" },
          {
            text:
              "There are two tamper keys in the device, one is in the back side, another is in the front side.  Both of them  can add,  remove, reset or association from Z-Wave network.\nTo reset the device: \nNotice: Use this procedure only in the event that the primary controller is lost or otherwise inoperable.\n1. Pressing tamper key four times within 1.5 seconds and do not release the tamper key in the 4th  pressed, and the LED will light ON.\n2. After 3 seconds the LED will turn OFF, after that within 2 seconds, release the tamper key. If successful, the LED will light ON one second. Otherwise, the LED will flash once.\n3. IDs are excluded and all settings will reset to factory default.",
            name: "ResetDescription",
          },
          {
            text:
              "The Door/Window Contact MT02648 has door/window, temperature and illumination, 3 sensors function in one,based on Z-Wave technology.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1130/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
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
              "\n          Setting the BASIC command value to turn on the light.\n          0 Send Basic Set Off.\n          255 Send Basic Set On.\n          1 to 99 Send Basic Set Level between 1 and 99.\n\t  ",
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
            max: "255",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "\n           2 Bit Mask - When 1, Test Mode is Enabled, When 0, Test Mode is Disabled.\n           4 Bit Mask - When 1, Door/Window function is Disabled, When 0, Door/Window function is Enabled.\n           8 Bit Mask - When 1, Temperature Scale is Celsius, When 0, Temperature Scale is Fahrenheit.\n           16 Bit Mask - When 1, Illumination Report after event trigger is not sent, When 0, illumination report after trigger is sent.\n           32 Bit Mask - When 1, Temperature report after trigger is not sent, When 0, temperature report after trigger is sent.\n           64 Reserved.\n           128 Bit Mask - When 1, Back key release into test mode is disabled, when 0, back key into test mode is enabled.\n       ",
          },
          {
            genre: "config",
            index: "6",
            label: "Multi-Sensor Function Switch",
            max: "255",
            min: "0",
            type: "byte",
            value: "4",
            Help:
              "\n           0 to 1 Bit Mask, When 1, Door opening will not send a signal to the nodes in association group 2, When 0, door opening will cause the lights in association group 2 to be sent a control signal.\n           2 to 15 Reserved.\n           16 Bit Mask, When 1, Disable the 5 second delay before turning off the light when the door is closed, When 0, enable a 5 second delay before turning off the light when the door is closed.\n           32 Bit Mask, When 1, the automatic turn-off of the light after the light is turned on by a door opening, When 0, the light that is turned on by the door opening will be automatically turned off.\n           64 to 255 Reserved.\n\t  ",
          },
          {
            genre: "config",
            index: "7",
            label: "Customer Function",
            max: "255",
            min: "0",
            type: "byte",
            value: "4",
            Help:
              "\n           0 to 7 Reserved.\n           8 Bit Mask, When 1, BASIC SET OFF is not sent when the door is closed, When 0, BASIC SET OFF is sent when the door is closed.\n           16 Bit Mask, When 1, Door Opening is reported using Sensor Binary, When 0, Door Opening is reported using Notification Report.\n           32 Bit Mask, When 1, Multi CC is Disabled, When 0, Multi CC is Enabled.\n           64 Bit Mask, When 1, the battery state is not sent when the device is triggered, when 0, the battery state is sent when the device is triggered.\n           255 Reserved.\n       ",
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
            index: "11",
            label: "Auto Report Door/Window State Time",
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
