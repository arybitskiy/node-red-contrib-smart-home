import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0260:1000:8002",
            name: "OzwInfoPage",
          },
          { text: "images/heiman/HS1SA-Z.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3006/",
            id: "1000",
            name: "ZWProductPage",
            type: "8002",
          },
          {
            text:
              "The Smart Smoke Alarm adopts Z-Wave protocol, when the sensor detects smoke to the set level, it will issue  acoustic-optic alarm to alert the users and also send alarm notifications to gateway immediately.It's suitable to be installed in living room, office,warehouse,and etc.",
            name: "Description",
          },
          {
            text:
              "-  Click [Add] icon in Z-Wave Controller .\n-  Press the Net_Button 3 times within 1.5s, Green LED is Blinking 3 times within 1 second.\n-  If Inclusion Process is successful, Green led will turn off.",
            name: "InclusionDescription",
          },
          {
            text:
              "-  Click [Remove] icon in Z-Wave Controller\n-  Press the Net_Button 3 times within 1.5s \n-  If Exclusion Process is successful, Green led is Blinking 6 times, then turn off.",
            name: "ExclusionDescription",
          },
          {
            text:
              "-  Wake up Notification is transmitted every 24 hours by default.\n-  Wake up Notification is transmitted after Notification Report is Transmitted",
            name: "WakeupDescription",
          },
          {
            text:
              "--Long press Net_Button while installing batteries in the product.\n- Device Reset Locally notification is Transmitted.\nPlease use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          { text: "HS1SA-Z", id: "1000", name: "Identifier", type: "8002" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3006/HS1SA-Z S2-documentation_3.pdf",
            name: "ProductManual",
          },
          { text: "Smart Smoke Alarm", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "8002",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1936/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2710/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3006/xml",
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
