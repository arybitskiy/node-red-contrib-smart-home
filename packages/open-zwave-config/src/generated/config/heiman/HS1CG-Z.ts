import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0260:1000:8003",
            name: "OzwInfoPage",
          },
          { text: "images/zipato/HS1CG-Z.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2473/",
            id: "1000",
            name: "ZWProductPage",
            type: "8003",
          },
          {
            text:
              "Smart Combustible Gas Sensor in a convenient wall plug form factor for easy installation. \n\nBuilt-in audio and led notification systems for gas leakage detection events.",
            name: "Description",
          },
          {
            text: "hm-hs1cg-z.eu",
            id: "1000",
            name: "Identifier",
            type: "8003",
          },
          {
            text:
              "- Press the Net_Button 3 times within 1.5s \n- If remove Process is successful, Green LED is Blinking 6 times, then turn on",
            name: "ExclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "8003",
          },
          {
            text:
              "-Long press Net_Button at least 10 seconds in the device. \n-Device Reset Locally notification is Transmitted.\nPlease use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2473/ZipatoSmartCombustibleGasSensorManual.pdf",
            name: "ProductManual",
          },
          { text: "Smart Combustible Gas Sensor", name: "Name" },
          {
            text:
              "- Press the Net_Button 3 times within 1.5s, Green LED is Blinking 3 times within 1 second.\n- If add Process is successful, Green LED will turn on.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2070/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2473/xml",
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
            num_groups: "2",
            Group: [
              { index: "1", label: "LifeLine", max_associations: "1" },
              { index: "2", label: "Notification", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
