import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 7,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0312:241C:B211",
            name: "OzwInfoPage",
          },
          { text: "images/inovelli/simple_module.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2461/",
            id: "241C",
            name: "ZWProductPage",
            type: "B211",
          },
          {
            text:
              "Press and hold the top button for at least 3 seconds while you plug the smart switch into a receptacle.\nUse this procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          { text: "ZW37", id: "241C", name: "Identifier", type: "B211" },
          { text: "Smart Plug Switch (2 channel)", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2461/ZW37-Manual70615.pdf",
            name: "ProductManual",
          },
          {
            text:
              "The 2 ports smart plug provides one Z-Wave outlet for remote controlled by controller through Z-Wave gateway for internet of thing service and can be configured in Z-Wave sensor network,",
            name: "Description",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to include\n    a device to the Z-Wave network.\n2. Once the controller is ready to include your device, press up and \n     release the toggle to include it in the network.",
            name: "InclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "241C",
            name: "FrequencyName",
            type: "B211",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to exclude \n    a device from the Z-Wave network.\n2. Once the controller is ready to Exclude your device, press up and \n     release the toggle to exclude it from the network.",
            name: "ExclusionDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/2379/",
            id: "271C",
            name: "ZWProductPage",
            type: "B212",
          },
          { text: "NZW39", id: "271C", name: "Identifier", type: "B212" },
          {
            text: "U.S. / Canada / Mexico",
            id: "271C",
            name: "FrequencyName",
            type: "B212",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2352/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2357/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2358/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2379/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2385/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2461/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 7,
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
