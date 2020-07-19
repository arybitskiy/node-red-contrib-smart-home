import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0063:3038:5052",
            name: "OzwInfoPage",
          },
          { text: "images/ge/28169-plugin-switch.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2533/",
            id: "3038",
            name: "ZWProductPage",
            type: "5052",
          },
          {
            text:
              "Transform any home into a smart home with the GE Z-Wave Smart Lighting Plug-in Smart Switch. The lighting control enables wireless control of on/off functions for standard table and floor lamps, and is compatible with incandescent, LED, Xenon, Halogen, fluorescent and compact fluorescent bulbs. Easily controlled by your mobile device or computer using any Z-Wave certified gateway, the space-saving horizontal module plugs into a standard wall receptacle without blocking the second outlet or obstructing placement of furniture. It provides a Z-Wave enabled outlet for the lamp or appliance that you would like to control. Perfect for plug-in fans, heaters, lamps and more! Take control of your home lighting with GE Z-Wave Smart Lighting Controls!",
            name: "Description",
          },
          {
            text:
              "1.\tFollow the instructions for your Z-Wave certified controller to include the device to the Z-Wave network. \n2.\tOnce the controller is ready to include your smart switch, single press and release the manual/program button on the smart dimmer to include it in the network.\n3.\tOnce your controller has confirmed that the smart switch has been included, refresh the Z-Wave network to optimize performance.",
            name: "InclusionDescription",
          },
          {
            text:
              "1.\tFollow the instructions for you Z-Wave certified controller to exclude a device from the Z-Wave network. \n2.\tOnce the controller is ready to exclude your device, press and release the manual/program button on the smart switch to exclude it from the network.",
            name: "ExclusionDescription",
          },
          {
            text: "28169/ZW4103",
            id: "3038",
            name: "Identifier",
            type: "5052",
          },
          {
            text:
              "1.\tIf plugged in, unplug the switch from the receptacle. \n2.\tPress and hold the top button for at least 3 seconds while you plug the switch into a receptacle. Note: this should only be used in the event your network’s primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2533/Binder1.pdf",
            name: "ProductManual",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3038",
            name: "FrequencyName",
            type: "5052",
          },
          { text: "Plug-in Smart Switch (Single Plug)", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1435/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1805/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2533/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "3",
            label: "LED Light",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tWhen shipped from the factory, the LED is set to turn ON when the connected light is turned OFF. \n\t\t\t\tThis is the default setting and can be changed if your primary controller supports the node configuration function. \n\t\t\t\tTo make the LED turn ON when the light is turned ON, change parameter 3s value to 1. \n\t\t\t\tTo turn the LED OFF at all times, change parameter 3s value to 2.\n\t\t\t",
            Item: [
              { label: "LED Light on when Z-Wave turned OFF", value: "0" },
              { label: "LED Light on when Z-Wave turned ON", value: "1" },
              { label: "LED Light Always Off", value: "2" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "1" }],
          },
        ],
      },
    ],
  },
};

export default config;
