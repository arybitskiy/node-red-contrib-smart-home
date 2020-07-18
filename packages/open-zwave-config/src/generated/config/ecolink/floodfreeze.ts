import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/014A:0010:0005",
            name: "OzwInfoPage",
          },
          { text: "images/ecolink/floodfreeze.png", name: "ProductPic" },
          {
            text:
              "-Z-Wave Plus enabled device which detects flood and freeze.\n-Reports tamper condition when cover is open.\nProduct Specifications\n-For indoor use only\n-Operating frequency: 908.42 MHz\n-Operating temperature: 0° – 49°C, 32° – 120°F (ambient temperature)\n-Operating humidity 5-95% non-condensing\n-Battery type required: 3V Lithium CR123A\n-Battery life approximately 5 years",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/XXXX:XXXX:XXXX",
            name: "OzwInfoPage",
          },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/2551/Z-Wave%20Plus%20Wireless%20Flood%20Sensor%20with%20a%20Probe%20FLF-ZWAVE5_V5.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Put Z-Wave Controller into inclusion mode. Insert battery into sensor to enter inclusion mode.",
            name: "InclusionDescription",
          },
          {
            text:
              "Put Z-Wave Controller into exclusion mode. Remove battery for 1 second and reinsert to enter exclusion mode.",
            name: "ExclusionDescription",
          },
          { name: "ResetDescription" },
          {
            text: "https://products.z-wavealliance.org/products/2551/",
            id: "0010",
            name: "ZWProductPage",
            type: "0005",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0010",
            name: "FrequencyName",
            type: "0005",
          },
          { text: "FLF-ZWAVE5", id: "0010", name: "Identifier", type: "0005" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2551/xml",
                author: "Dave Hylands - dhylands@gmail.com",
                date: "30 Aug 2019",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "48",
        Instance: [{ index: "1" }],
        Value: [
          {
            genre: "user",
            index: "0",
            instance: "1",
            label: "Flood Sensor",
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
            label: "Freeze Sensor",
            read_only: "true",
            type: "bool",
            value: "false",
            write_only: "false",
          },
        ],
        SensorMap: [
          { index: "0", type: "6" },
          { index: "1", type: "7" },
        ],
      },
    ],
  },
};

export default config;
