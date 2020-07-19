import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0260:1000:8004",
            name: "OzwInfoPage",
          },
          { text: "images/heiman/HS1WL-Z.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3027/",
            id: "1000",
            name: "ZWProductPage",
            type: "8004",
          },
          {
            text:
              "The Smart Water Leakage Sensor can protect your house from potential water damage.It can be placed near plumbing,sinks,aquariums,pumps,refrigerators,dishwashers,toilets,basements,washing machines,water heaters,and garages.",
            name: "Description",
          },
          {
            text:
              "-  Wake up Notification is transmitted every 24 hours by default.\n-  Wake up Notification is transmitted after Notification Report is Transmitted",
            name: "WakeupDescription",
          },
          {
            text:
              "- Click [Add] icon in Z-Wave Controller .\n- Press the Networking_Button 3 times within 1.5s, Green LED is Blinking 4 times within 1 second.\n-  If Inclusion Process is successful, Green led will turn off.",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3027/HS3WL-Z-S2documentation.pdf",
            name: "ProductManual",
          },
          { text: "HS3WL-Z", id: "1000", name: "Identifier", type: "8004" },
          {
            text:
              "-  Click [Remove] icon in Z-Wave Controller\n-  Press the Networking_Button 3 times within 1.5s \n-  If Exclusion Process is successful, Green led is Blinking 6 times, then turn off.",
            name: "ExclusionDescription",
          },
          {
            text:
              "-Long press Networking_Button while installing batteries in the Device \n-Device Reset Locally notification is Transmitted\n-Green LED Turns off after 2 seconds.\nPlease use this procedure only when the network primary controller is missing or otherwise  inoperable.",
            name: "ResetDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "8004",
          },
          { text: "Smart Water Leakage Sensor", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2322/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2709/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3027/xml",
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
            num_groups: "5",
            Group: [
              { index: "1", label: "LifeLine", max_associations: "1" },
              { index: "2", label: "Binary Sensor", max_associations: "5" },
              {
                index: "3",
                label: "Binary Sensor tamper",
                max_associations: "5",
              },
              { index: "4", label: "Notification", max_associations: "5" },
              {
                index: "5",
                label: "Notification tamper",
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
