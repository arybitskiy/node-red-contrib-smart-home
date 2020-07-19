import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 7,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/013C:001F:0002",
            name: "OzwInfoPage",
          },
          { text: "images/philio/phpat02.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2875/",
            id: "001F",
            name: "ZWProductPage",
            type: "0002",
          },
          { text: "PAT02-5A", id: "001F", name: "Identifier", type: "0002" },
          {
            text: "CEPT (Europe) / Russia / Russia",
            id: "001F",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text:
              "This is a Z-WaveTM plus product, it supports security OTA with the newest features of the Z-Wave technology. Z-Wave is a wireless communication protocol designed for home automation, specifically to remotely control applications in residential and light commercial environments. The technology uses a low-power RF radio embedded or retrofitted into home electronics devices and systems, such as lighting, home access control, entertainment systems and household appliances",
            name: "Description",
          },
          { text: "Датчик протечки (Leakage sensor)", name: "Name" },
          {
            text:
              "After the device adding to the network, it will wake-up once per day in default. When it wake-up it will broadcast the “Wake Up Notification” message to the network, and wake-up 10 seconds for receive the setting commands.\nThe wake-up interval minimum setting is 30 minutes, and maximum setting is 120 hours. And the interval step is 30 minutes.\n\nPress the tamper key once. The device will wake-up 10 seconds.",
            name: "WakeupDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2875/PAT02_Manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1. Have Z-WaveTM Controller entered exclusion mode.\n    2. Pressing tamper key three times within 1.5 seconds to enter the exclusion mode.\nNode ID has been excluded.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Notice: Use this procedure only in the event that the primary controller is lost or otherwise inoperable.\n    1. Pressing tamper key four times within 1.5 seconds and do not release the tamper key in the 4th pressed, and the LED will light ON.\n    2. After 3 seconds the LED will turn OFF, after that within 2 seconds, release the tamper key. If successful, the LED will light ON one second. Otherwise, the LED will flash once.\n    3. IDs are excluded and all settings will reset to factory default.",
            name: "ResetDescription",
          },
          {
            text:
              "1. Have Z-WaveTM Controller entered inclusion mode.\n    2. Pressing the tamper key three times within 1.5 seconds to enter the inclusion mode.\n    3. After add successful, the device will wake to receive the setting command from Z-WaveTM Controller about 20 seconds.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1186/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1299/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1450/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2834/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2875/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 7,
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
            label: "Basic Set OFF Level",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n                Setting the BASIC command value.\n                When the flood trigger off(0x00), send the BASIC CC to the group 2\n            ",
          },
          {
            genre: "config",
            index: "2",
            label: "Basic Set ON Level",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "255",
            Help:
              "\n                Setting the BASIC command value.\n                When the flood trigger on(0xFF), send the BASIC CC to the group 2\n            ",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Operation Mode",
            max: "255",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "\n                Bit0: Disable the Flood function.\n                Bit3: Setting the temperature scale. 0: Fahrenheit, 1:Celsius\n                Bit5: Disable the temperature report after event triggered. (1:Disable,0:Enable)\n            ",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Multi-Sensor Function Switch",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n                Bit6: Disable the humidity report after event triggered. (1:Disable, 0:Enable)\n            ",
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Costumer Function",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n                Bit3: Disable send out BASIC OFF after the flood event cleared. (1:Disable, 0:Enable)\n                Bit4: Notification Type. (0: Using Notification Report, 1: Using Sensor Binary Report)\n                Bit5: Disable Multi CC in auto report. (1:Disable, 0:Enable)\n                Bit6: Disable to report battery state when the device triggered. (1:Disable, 0:Enable)\n            ",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Auto Report Battery Time",
            max: "127",
            min: "0",
            type: "byte",
            units: "",
            value: "12",
            Help:
              "\n                The interval time for auto report the battery level.\n                0 means turn off auto report.\n                The default value is 12.\n                The tick time can be set by the configuration No.20.\n            ",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Auto Report Temperature Time",
            max: "127",
            min: "0",
            type: "byte",
            units: "",
            value: "12",
            Help:
              "\n                The interval time for auto report the temperature.\n                0 means turn off auto report.\n                The default value is 12.\n                The tick time can be set by the configuration No.20.\n            ",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Auto Report Humidity Time",
            max: "127",
            min: "0",
            type: "byte",
            units: "",
            value: "12",
            Help:
              "\n                The interval time for auto report the humidity.\n                0 means turn off auto report.\n                The default value is 12.\n                The tick time can be set by the configuration No.20.\n            ",
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Auto Report Flood Time",
            max: "127",
            min: "0",
            type: "byte",
            units: "",
            value: "12",
            Help:
              "\n                The interval time for auto report the flood state.\n                0 means turn off auto report.\n                The default value is 12.\n                The tick time can be set by the configuration No.20.\n            ",
          },
          {
            genre: "config",
            index: "20",
            instance: "1",
            label: "Auto Report Tick Interval",
            max: "255",
            min: "0",
            type: "byte",
            units: "minute",
            value: "30",
            Help:
              "\n                The interval time for auto report each tick.\n                Setting this configuration will effect configuration No.10, No.13, No.14 and No.15.\n                Units of one minute.\n                Caution1: Setting to 0 means turn off all auto report function.\n                Caution2: The value is unsigned byte\n            ",
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "Temperature Differential Report",
            max: "127",
            min: "0",
            type: "byte",
            units: "fahrenheit",
            value: "1",
            Help:
              "\n                The temperature differential to report.\n                0 means turn off this function. The unit is Fahrenheit.\n                Enable this function the device will detect every 10 seconds.\n                And when the temperature is over 140 degree Fahrenheit, it will continue report.\n            ",
          },
          {
            genre: "config",
            index: "22",
            instance: "1",
            label: "Humidity Differential Report",
            max: "60",
            min: "0",
            type: "byte",
            units: "%",
            value: "5",
            Help:
              "\n                The humidity differential to report.\n                0 means turn off this function.\n                The unit is percentage. Enable this function the device will detect every 10 seconds.\n            ",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "8" },
              { index: "2", label: "Light control", max_associations: "8" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
