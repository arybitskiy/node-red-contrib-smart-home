import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/013C:001E:0002",
            name: "OzwInfoPage",
          },
          { text: "images/philio/phpsg01.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2868/",
            id: "001E",
            name: "ZWProductPage",
            type: "0002",
          },
          { text: "Датчика дыма (Smoke sensor)", name: "Name" },
          {
            text:
              "This is the Z-WaveTM plus Smoke Sensor, it supports security OTA with the newest features of the Z-Wave technology. Z-Wave is a wireless\ncommunication protocol designed for home automation, specifically to\nremotely control applications in residential and light commercial\nenvironments. The technology uses a low-power RF radio embedded or\nretrofitted into home electronics devices and systems, such as lighting,\nhome access control, entertainment systems and household appliances.",
            name: "Description",
          },
          {
            text:
              "1. Have Z-Wave Controller entered inclusion mode.\n    2. Pressing button three times within 1.5 seconds will enter the inclusion mode.\n    3. After add successful, the device will wake to receive the setting command from Z-Wave Controller, about 20 seconds.",
            name: "InclusionDescription",
          },
          {
            text:
              "1. Have Z-Wave Controller entered exclusion mode.\n    2. Pressing button three times within 1.5 seconds to enter the exclusion mode. Node ID has been removed.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2868/PSG01_Manual-2015-06-12.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Notice: Use this procedure only in the event that the primary controller is lost or otherwise inoperable.\n    1. Pressing button four times within 1.5 seconds and do not release the button in the 4th press, the red LED will light be ON.\n    2. After the red LED flash 9 times, release the button within 2 seconds.\n    3. IDs are removed and all settings will reset to factory default.",
            name: "ResetDescription",
          },
          { text: "PSG01", id: "001E", name: "Identifier", type: "0002" },
          {
            text: "CEPT (Europe) / Russia / Russia",
            id: "001E",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text:
              "After the device is added to the network, it will wake-up once per day in default. When it wakes-up it will broadcast the “Wake Up Notification” message to the network, and wake-up 10 seconds to receive the setting commands.\nThe wake-up interval minimum setting is 30 minutes, the maximum setting is 120 hours,  the interval step is 30 minutes.\n\nIf the user wants to wake-up the device immediately, please press the  button once. The device will wake-up 10 seconds.",
            name: "WakeupDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1167/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2835/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2868/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 5,
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
            index: "7",
            label: "Customer Function",
            max: "127",
            min: "0",
            type: "byte",
            value: "4",
            Help:
              "\n                Customer function switch, using bit control.\n                Bit0: Reserve.\n                Bit1: Reserve.\n                Bit2: Reserve => 1.\n                Bit4: Notification Type (0: Notification Report, 1: Sensor Binary Report).\n                Bit5: Reserve.\n                Bit6: Reserve.\n                Bit7: Reserve.\n            ",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Auto Report Battery Time",
            max: "127",
            min: "1",
            type: "byte",
            units: "30 min",
            value: "12",
            Help:
              "\n                The interval time for auto report the battery level.\n                30 minutes per tick and minimum time is 30 minutes, default tick is 12 (6 hours)\n            ",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "8" }],
          },
        ],
      },
    ],
  },
};

export default config;
