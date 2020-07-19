import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 14,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/019A:000A:0003",
            name: "OzwInfoPage",
          },
          { text: "images/sensative/stripscomfort.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3391/",
            id: "000A",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "CEPT (Europe) / U.S. / Canada / Mexico / CEPT (Europe) / U.S. / Canada / Mexico / U.S. / Canada / Mexico / CEPT (Europe) / CEPT (Europe) / U.S. / Canada / Mexico / CEPT (Europe) / U.S. / Canada / Mexico / Australia / New Zealand / Japan / India",
            id: "000A",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "Set your controller to add mode (see your controller’s manual). Follow the instruction for Wake up. A long LED blink indicates that the add/remove was successful.",
            name: "InclusionDescription",
          },
          { text: "11 02 015", id: "000A", name: "Identifier", type: "0003" },
          { text: "Strips-Multi-sensor", name: "Name" },
          {
            text:
              "You may need to reset Strips if your Z-Wave controller is missing or not responding.\n\nFollow the instructions for “Wake up”, but on the 3rd repetition, leave the magnet at the rounded edge for 10 seconds. A long LED signal indicates success.",
            name: "ResetDescription",
          },
          {
            text:
              "Set your controller to remove mode (see your controller’s manual). Follow the instruction for Wake up. A long LED blink indicates that the add/remove was successful.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Wake up Strips manually for Z-Wave communication. Place the magnet at the rounded edge. When the LED blinks, move the magnet away. Repeat twice within 10 seconds.",
            name: "WakeupDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3391/Strips Multi-Sensors EU manuals.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Strips, the ultra-thin multi sensor is now available in two new sensor models, Strips Drip and Strips Comfort. Drip and Comfort join Strips Guard, the thinnest magnet sensor in the world detecting if your windows are open and closed invisibly since 2015.\n\nStrip Drip sends an alarm signal if it detects a water leak. Its unique design allows it to be easily placed almost everywhere, including most places other sensors simply can’t fit.  With soaking pads integrated in the mounting plate even small amounts of water will be detected. The built-in temperature sensor gives the possibility to combine the leakage alarm with a freeze alarm. There is also a built-in ambient light sensor that may be useful in special applications.\n\nStrips Comfort is a very accurate temperature and ambient light sensor. The unique design and mounting plate makes it easy to place almost invisibly in your home to measure temperature or control heating, air conditioning and even windows blinds which are connected to your Z-Wave smart home system.\n\nAll Strips products can be used both in-doors and out-doors and the integrated custom battery gives Strips an expected lifetime of up to 10 years. For you, this means no hassle needing to change or charge batteries in your Strips sensors for the lifetime of the products!",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2415/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2443/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2737/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2755/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2941/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2942/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 7,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3250/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 8,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3259/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 9,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3346/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 10,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3347/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 11,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3370/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 12,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3390/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 13,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3391/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 14,
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
            label: "Led alarm reporting",
            size: "1",
            type: "list",
            value: "1",
            Help: "Led alarm reporting",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Temperature and light reporting",
            size: "1",
            type: "list",
            value: "1",
            Help: "Temperature and light reporting",
            Item: [
              { label: "Normal", value: "1" },
              { label: "Frequent", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Temperature reporting",
            size: "1",
            type: "list",
            value: "1",
            Help: "Does not affect temperature alarms",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Temperature reporting unit",
            size: "1",
            type: "list",
            value: "0",
            Help: "Temperature reporting unit",
            Item: [
              { label: "Celsius", value: "0" },
              { label: "Fahrenheit", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "6",
            label: "Temperature alarms",
            size: "1",
            type: "list",
            value: "0",
            Help: "Temperature alarms",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "High temperature level",
            max: "148",
            min: "0",
            type: "byte",
            value: "60",
            Help: "\n                -20 to 60C\n            ",
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Low temperature level",
            max: "147",
            min: "0",
            type: "byte",
            value: "147",
            Help: "\n                -20 to 60C\n            ",
          },
          {
            genre: "config",
            index: "9",
            label: "Ambient light reporting ",
            size: "1",
            type: "list",
            value: "1",
            Help: "Ambient light reporting",
            Item: [
              { label: "Off", value: "0" },
              { label: "On", value: "1" },
              { label: "Report only threshold", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "High Ambient light report level",
            max: "64000",
            min: "3",
            type: "int",
            units: "lux",
            value: "40000",
            Help: "\n                3 to 64000\n            ",
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Low ambient light report level ",
            max: "42000",
            min: "1",
            type: "int",
            units: "lux",
            value: "5000",
            Help: "\n                1 to 42000\n            ",
          },
          {
            genre: "config",
            index: "12",
            label: "Leakage alarm",
            size: "1",
            type: "list",
            value: "0",
            Help: "Leakage alarm",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Leakage alarm level",
            max: "100",
            min: "1",
            type: "byte",
            value: "10",
            Help:
              "\n                1 to 100 (1 = almost dry, 100 = wet)\n            ",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Moisture reporting period",
            max: "120",
            min: "0",
            type: "byte",
            units: "Hours",
            value: "0",
            Help:
              "\n                0-120 (Hours between reports)\n            ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "1" }],
          },
        ],
      },
    ],
  },
};

export default config;
