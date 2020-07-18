import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 7,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0118:0002:0004",
            name: "OzwInfoPage",
          },
          { text: "images/wenzhou/tz69.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1950/",
            id: "0002",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text:
              '1. To reset, press the socket on/off button three times within 1.5 seconds\n2. then the fourth time, press and hold for seconds until the socket LED is off\n3. the socket reset successfully\n\nUse the "Reset" procedure only in the event that the network primary controller is missing or otherwise inoperable',
            name: "ResetDescription",
          },
          { text: "Smart energy plug in switch", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1950/TZ69PLUS User Manual.pdf",
            name: "ProductManual",
          },
          { text: "TZ69BR", id: "0002", name: "Identifier", type: "0004" },
          {
            text: "CEPT (Europe) / China / CEPT (Europe) / Brazil",
            id: "0002",
            name: "FrequencyName",
            type: "0004",
          },
          {
            text:
              "1. Enter your Z-Wave controller into inclusion mode\n2. Press the socket on/off button three times within 1.5 seconds to be included.",
            name: "InclusionDescription",
          },
          {
            text:
              "This smart energy plug is able to detect current wattage (5-3000W) and overload wattage (3010-3300W) of connected lights or appliances. When detecting overload state, the switch will be disabled and its on/off button will be lockout of which LED will flash quickly. However, unplug and re-connect the switch and it will reset its overload condition to normal status.",
            name: "Description",
          },
          {
            text:
              "1. Enter your Z-Wave controller into exclusion mode\n2. Press the socket on/off button three times within 1.5 seconds to be excluded.",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1640/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1665/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1666/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1850/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1886/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1950/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
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
            instance: "1",
            label: "LED-Behaviour",
            size: "1",
            type: "list",
            value: "0",
            Help: "Defines the behavior of the LED.",
            Item: [
              { label: "Indicator Off", value: "0" },
              { label: "Indicator On", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Memory function",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Watt meter report period",
            max: "32767",
            min: "1",
            type: "short",
            units: "5 sec",
            value: "720",
            Help:
              "If the setting is configured for 1 hour (value=720), the TZ69E will report its instant power consumption every 1 hour.",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "kWh meter report period",
            max: "32767",
            min: "1",
            type: "short",
            units: "10 min",
            value: "6",
            Help:
              "If the setting is configured for 1 hour (value=6), the TZ69E will report its accumulated power consumption (kWh) every 1 hour.",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Threshold of Kwh for Load Caution",
            max: "10000",
            min: "1",
            type: "short",
            units: "Kwh",
            value: "10000",
            Help: "",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Threshold of Watt for Load Caution",
            max: "3000",
            min: "10",
            type: "short",
            units: "Watt",
            value: "3000",
            Help: "",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
