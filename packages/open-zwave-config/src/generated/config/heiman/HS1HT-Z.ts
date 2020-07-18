import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0260:1000:8007",
            name: "OzwInfoPage",
          },
          { text: "images/heiman/HS1HT-Z.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3015/",
            id: "1000",
            name: "ZWProductPage",
            type: "8007",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3015/HS1HT-Z-S2documentation.pdf",
            name: "ProductManual",
          },
          {
            text:
              "-  Click [Remove] icon in Z-Wave Controller.\n-  Press the Net_Button 3 times within 1.5s \n-  If Exclusion Process is successful, Green LED is Blinking 6 times, then turn off",
            name: "ExclusionDescription",
          },
          { text: "Smart Temperature & Humidity Sensor", name: "Name" },
          {
            text:
              "-  Click [Add] icon in Z-Wave Controller.\n-  Press the Net_Button 3 times within 1.5s, Green LED is Blinking 3 times within 1 second.\n-  If Inclusion Process is successful, Green LED will turn off.",
            name: "InclusionDescription",
          },
          {
            text:
              "-Long press Net_Button at least 10 seconds in the product. \n- Device Reset Locally notification is Transmitted.\nPlease use this procedure only when the network primary controller is missing or otherwise  inoperable.",
            name: "ResetDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "8007",
          },
          {
            text:
              "Wake up Notification is transmitted every 300 seconds by default.",
            name: "WakeupDescription",
          },
          {
            text:
              "The smart humidity and temperature sensor adopts Z-Wave protocol. It is used to detect humidity and temperature. When the humidity or temperature exceeds the alarm thresholds, it will send alarm notifications to gateway immediately.",
            name: "Description",
          },
          { text: "HS1HT-Z", id: "1000", name: "Identifier", type: "8007" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2321/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3015/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
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
              {
                index: "2",
                label: "Multilevel sensor temperature",
                max_associations: "5",
              },
              {
                index: "3",
                label: "Multilevel sensor humidity",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
