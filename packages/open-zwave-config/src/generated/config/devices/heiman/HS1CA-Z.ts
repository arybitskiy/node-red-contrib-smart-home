import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0260:1000:8005",
            name: "OzwInfoPage",
          },
          { text: "images/zipato/HS1CA-Z.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2699/",
            id: "1000",
            name: "ZWProductPage",
            type: "8005",
          },
          {
            text:
              "Zipato Carbon Monoxide Sensor (Z-Wave) is designed to give early warning of higher carbon monoxide level, based on Z-Wave technology.  Z-Wave is a wireless communication protocol designed for remote control of appliances in residential automated homes and light commercial environments.",
            name: "Description",
          },
          {
            text:
              "Press button on sensor 3 times within 1.5s, Green LED will blink 3 times within 1 second.\n\nIf Inclusion Process is successful, Green led will turn off.",
            name: "InclusionDescription",
          },
          {
            text:
              "Wake up Notification is transmitted every 24 hours by default.\nWake up Notification is transmitted after Notification Report is Transmitted",
            name: "WakeupDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "8005",
          },
          {
            text:
              "Remove battery.\nInsert battery while holding button on sensor.\n\nPlease use this procedure only when the network primary\ncontroller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "Press button on sensor 3 times within 1.5s, Green LED will blink 3 times within 1 second.\n\nIf Inclusion Process is successful, Green led will turn off.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2699/hm-hs1ca-z-Smart-Carbon-Monoxide-Sensor-Z-Wave-User-Manual-1.0.pdf",
            name: "ProductManual",
          },
          { text: "Zipato Carbon Monoxide Sensor", name: "Name" },
          {
            text: "hm-hs1ca-z.eu",
            id: "1000",
            name: "Identifier",
            type: "8005",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1940/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2699/xml",
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
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "LifeLine", max_associations: "1" },
              { index: "2", label: "Binary Sensor", max_associations: "5" },
              { index: "3", label: "Notification", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
