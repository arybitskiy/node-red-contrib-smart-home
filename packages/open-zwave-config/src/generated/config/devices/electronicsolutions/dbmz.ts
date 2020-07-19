import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0033:3032:5250",
            name: "OzwInfoPage",
          },
          { text: "images/electronicsolutions/dbmz.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/305/",
            id: "3032",
            name: "ZWProductPage",
            type: "5250",
          },
          {
            text:
              "DC Motor Controller for window coverings.Z-Wave DC motor control, packaged in a “Plug & Play” Box. Z-Wave radio allows for bi-directional RF communications with other Z-Wave products in the market. Allows for total switched load of up to 2 Amps at 27VDC.\n\nBy utilizing the Z-Wave standard, the DBMZ is guaranteed interoperability between systems and devices from other Z-Wave enabled products.\n\nIn order for scene functionality to operate correctly, the calibration sequence MUST be performed. See the technical documentation for more details.\n\nDC Power supply needed, see Power Supplies for selections.\n\nThis product has passed a stringent conformance test to assure it meets the Z-Wave standard for complete interoperability with all other devices and controls.",
            name: "Description",
          },
          {
            text: "Malaysia / India / Hong Kong / CEPT (Europe)",
            id: "3032",
            name: "FrequencyName",
            type: "5250",
          },
          {
            text: "http://elec-solutions.com/products/z-wave/dbmz.html",
            name: "ProductPage",
          },
          {
            text: "http://elec-solutions.com/home.html",
            name: "ProductSupport",
          },
          { text: "DC Motor Controller - Window coverings", name: "Name" },
          { text: "DBMZ EU", id: "3032", name: "Identifier", type: "5250" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/40/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 1,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/41/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/42/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/305/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
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
            index: "1",
            instance: "1",
            label: "Calibration",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Unit calibration state",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Calibration", value: "1" },
              { label: "Factory default", value: "129" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Motor direction",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Unit motor direction state",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Reversed", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Tilt feature",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Unit tilt feature state",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
