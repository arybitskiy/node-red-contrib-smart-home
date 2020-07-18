import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0063:3130:6363",
            name: "OzwInfoPage",
          },
          { text: "images/ge/14284.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1194/",
            id: "3130",
            name: "ZWProductPage",
            type: "6363",
          },
          {
            text:
              "1. If plugged in, unplug the Switch from the receptacle. \n2. Press and hold the top button for at least 3 seconds while you plug the switch into a receptacle.",
            name: "ResetDescription",
          },
          {
            text: "12720/ZW4201",
            id: "3130",
            name: "Identifier",
            type: "6363",
          },
          {
            text:
              "http://z-wave-assets.s3-us-west-2.amazonaws.com/docs/138/B0013V8K3O_GE_Jasco_Z-Wave_Plug-in_Outdoor_Smart_Switch_12720_Manual.pdf",
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
            type: "6363",
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
                  "Initial Metadata added - https://products.z-wavealliance.org/products/1194/xml",
                author: "mike240se",
                date: "26 June 2020",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
