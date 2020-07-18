import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0063:3032:4F50",
            name: "OzwInfoPage",
          },
          { text: "images/ge/14284.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2526/",
            id: "3032",
            name: "ZWProductPage",
            type: "4F50",
          },
          {
            text:
              "1. If plugged in, unplug the Switch from the receptacle. \n2. Press and hold the top button for at least 3 seconds while you plug the switch into a receptacle.",
            name: "ResetDescription",
          },
          {
            text: "14284/ZW4201",
            id: "3032",
            name: "Identifier",
            type: "4F50",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2526/14284 EnFrSp QSG v1.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Transform any home into a smart home with the GE Z-Wave Outdoor Smart Switch. The lighting control enables wireless control of on/off functions for outdoor applications, and is compatible with incandescent, LED, Xenon, Halogen, fluorescent and compact fluorescent bulbs. The weather-resistant housing with a protective outlet cover safeguards the outlet from dirt and debris when not in use. The discreet black color blends in with any outdoor environment. Perfect for decorative or seasonal lighting, fountains and other outdoor plug-in appliances. Take control of your home lighting with GE Z-Wave Smart Lighting Controls!",
            name: "Description",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to exclude a device from the Z-Wave network. \n2. Once the controller is ready to Exclude your device, press and release the manual/program button on the smart switch to exclude it from the network.",
            name: "ExclusionDescription",
          },
          { text: "Plug-in Outdoor Smart Switch", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "3032",
            name: "FrequencyName",
            type: "4F50",
          },
          {
            text:
              "1. Follow the instructions for you Z-Wave certified controller to include the smart switch to the Z-Wave network. \n2. Once the controller is ready to include your outdoor smart switch, press and release the manual/program button on the smart switch to include it in the network.\n3. Once your controller has confirmed that the smart switch has been included, refresh the Z-Wave network to optimize performance.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1853/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 1,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2526/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
