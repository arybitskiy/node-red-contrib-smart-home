import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0131:0002:0002",
            name: "OzwInfoPage",
          },
          { text: "images/zipato/RGBBulb.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2034/",
            id: "0002",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text:
              "Place your Z-Wave primary controller into inclusion mode by following the controller manufacturer's instructions.\n\nPlace the light bulb into inclusion mode by gently tapping the\nlight bulb. The light bulb will shine green to indicate a successful\nactivation of inclusion mode.",
            name: "InclusionDescription",
          },
          {
            text: "rgbwe27zw.us",
            id: "0002",
            name: "Identifier",
            type: "0002",
          },
          {
            text: "CEPT (Europe) / U.S. / Canada / Mexico",
            id: "0002",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text:
              "A factory default reset is performed when the bulb is excluded\nfrom a Z-Wave network.\n\nPlease use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "Zipato RGBW BULB has 5 color channels available for you to adjust:\nRED, GREEN, BLUE, WARM WHITE and COLD WHITE. Zipato RGBW\nBULB can be used to add color to your home or just to lighten it up in\nany white color tone you desire.",
            name: "Description",
          },
          {
            text:
              "Place your Z-Wave primary controller into exclusion mode by following the controller manufacturer's instructions.\n\nPlace the light bulb into exclusion mode by gently tapping the\nlight bulb. The light bulb will shine green to indicate a successful\nactivation of exclusion mode.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2034/rgbwe27zw - Zipato RGBW Bulb User Manual v1.1.pdf",
            name: "ProductManual",
          },
          { text: "Zipato RGBW light bulb", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1132/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2034/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
            index: "1",
            label: "RGB Color",
            max: "100",
            min: "0",
            type: "byte",
            units: "",
            value: "50",
            Help: "\n\tColor Temperature\n      ",
          },
          {
            genre: "config",
            index: "2",
            label: "Shock Sensor",
            max: "32",
            min: "0",
            type: "byte",
            units: "",
            value: "10",
            Help:
              "\n        Shock sensor : 0=Maximum sensitivity ; 32=minimum sensitivity \n      ",
          },
        ],
      },
      { action: "remove", id: "39" },
      { action: "remove", id: "32" },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Report", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
