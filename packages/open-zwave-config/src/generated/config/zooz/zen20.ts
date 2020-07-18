import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/015D:F51C:0651",
            name: "OzwInfoPage",
          },
          { text: "images/zooz/zen20.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1646/",
            id: "F51C",
            name: "ZWProductPage",
            type: "0651",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "F51C",
            name: "FrequencyName",
            type: "0651",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to include a device to   \n  the Z-Wave network.\n2. Once the controller is ready to include your device, press up and release the toggle \n  to include it in the network.\n3. Once your controller has confirmed that the device has been included, refresh the \n  Z-Wave network to optimize performance.\n4. The device is associated in the same group when it included in setting process. \n  Now you can control your Z-Wave device according to groups, scenes, schedules and automation programmed.",
            name: "InclusionDescription",
          },
          {
            text:
              "The 5 outlets power strip provides five Z-Wave outlets for remote controlled by controller through Z-Wave gateway for internet of thing service and can be configured in Z-Wave sensor network, if Z-Wave certified controller features remote access, you can now control five outlets from your mobile phone each one. Five outlets can\nmanual On/Off the same time by push button. The two USB ports provide 5V/2.1A charging power for MP3/ mobile phone.etc..",
            name: "Description",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to exclude a device \n  from the Z-Wave network.\n2. Once the controller is ready to Exclude your device, press up and release the toggle \n  to exclude it from the network.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1646/ZW1505-Manual0130.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1. Press and hold the top button for at least 3 seconds while you plug the smart \n  switch into a receptacle.\n2. Use this procedure only in the event that the network primary controller is missing \n  or otherwise inoperable.",
            name: "ResetDescription",
          },
          { text: "5 Outlet Power Strip with USB charger", name: "Name" },
          { text: "ZW 1505", id: "F51C", name: "Identifier", type: "0651" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1646/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 2,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "112" },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
