import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          { text: "DB2 Z-Wave Accessory", name: "Name" },
          {
            text:
              "Connect a DB2 or DB2-B to your smart hub using this easy to install Z-Wave module",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/021D:0001:0003",
            name: "OzwInfoPage",
          },
          { text: "images/alfred/DB2.png", name: "ProductPic" },
          {
            text:
              "https://alfredinc.com/collections/products/products/zwave-module",
            name: "ProductPage",
          },
          {
            text: "https://alfredinc.com/pages/support",
            name: "ProductSupport",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3324/Alfred Z-Wave Plus System Integrators Guide V5.1.pdf",
            name: "ProductManual",
          },
          { name: "WakeupDescription" },
          {
            text:
              "Follow the user guide of hub to enter inclusion mode.\n-Operate on lock following guide below:\n1.Enter master mode(refer to programming instruction)\n2.Input “8” to enter “function extension settings”\n3.Input “1” to join a network.",
            name: "InclusionDescription",
          },
          {
            text:
              "Follow the user guide of hub to enter exclusion mode.\n-Operate on lock following guide below:\n1.Enter master mode(refer to programming instruction)\n2.Input “8” to enter “function extension settings”\n3.Input “2” to log off a network.",
            name: "ExclusionDescription",
          },
          {
            text:
              'Please use this procedure only when the network primary controller is missing or inoperable.\n-Operations on lock\n1.Open the door and keep the lock in "unlock" status\n2.Open battery box and find the reset button. \n3.Use a sharp thing to press and hold the reset button.\n4.Keep holding the reset button and remove a battery from battery box then replace it.\n5.Keep holding the reset button until hearing voice guide.',
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/3324",
            id: "0001",
            name: "ZWProductPage",
            type: "0003",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial file based on z-wavealliance.org",
                author: "petergebruers - petergebruers@gmail.com on behalf of ",
                date: "25 Aug 2019",
                revision: 1,
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
            Group: [{ index: "1", label: "LifeLine", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
