import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0260:1000:8006",
            name: "OzwInfoPage",
          },
          { text: "images/heiman/HS2SK-Z.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3017/",
            id: "1000",
            name: "ZWProductPage",
            type: "8006",
          },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "8006",
          },
          { text: "Smart Metering Plug", name: "Name" },
          {
            text:
              "-Long press SW_Button at least 10 seconds in HS2SK-Z. \n- Device Reset Locally notification is Transmitted.\n-Please use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "The smart metering plug, adopts flame-retardant engineering material and Z-Wave protocol. it can be controlled by APP remotely. It also supports power metering and timing switch, and the function of power, voltage, current overload protection.",
            name: "Description",
          },
          { text: "HS2SK-Z", id: "1000", name: "Identifier", type: "8006" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3017/HS2SK-Z-S2documentation.pdf",
            name: "ProductManual",
          },
          {
            text:
              "-  Click [Remove] icon in Z-Wave Controller. \n-  Press the SW_Button 3 times within 1.5s \n-  If remove Process is successful, Green LED is Blinking 6 times, then turn off.",
            name: "ExclusionDescription",
          },
          {
            text:
              "-  Click [Add] icon in Z-Wave Controller.\n-  Press the SW_Button 3 times within 1.5s, Green LED is Blinking 3 times within 1 second.\n-  If add Process is successful, Green LED will turn off.",
            name: "InclusionDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/2315/",
            id: "1000",
            name: "ZWProductPage",
            type: "8008",
          },
          { text: "HS2SK-Z", id: "1000", name: "Identifier", type: "8008" },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "8008",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1941/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2315/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3017/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 4,
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
            num_groups: "1",
            Group: [{ index: "1", label: "LifeLine", max_associations: "1" }],
          },
        ],
      },
    ],
  },
};

export default config;
