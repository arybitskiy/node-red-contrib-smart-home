import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0063:3033:5052",
            name: "OzwInfoPage",
          },
          { text: "images/ge/14282-plugin-switch.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2525/",
            id: "3033",
            name: "ZWProductPage",
            type: "5052",
          },
          {
            text:
              "Adding your device to a Z-Wave network:\n1. Follow the instructions for your Z-Wave certified controller to\ninclude the device to the Z-Wave network.\n2. Once the controller is ready to include your smart switch,\nsingle press and release the manual/program button on the\nsmart switch to include it in the network.\nNow you have complete control to turn your lamp ON/OFF\naccording to groups, scenes, schedules and interactive\nautomations programmed by your controller.\nIf your Z-Wave certified controller features Remote Access,\nyou can now control your lighting from your mobile devices",
            name: "InclusionDescription",
          },
          {
            text:
              "To exclude and reset the device:\n1. Follow the instructions for your Z-Wave certified controller to\nexclude a device from the Z-Wave network.\n2. Once the controller is ready to Exclude your device, press\nand release the manual/program button on the smart switch\nto exclude it from the network.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Transform any home into a smart home with the GE Z-Wave Smart Lighting Control and Appliance Module. The lighting control enables wireless control of on/off functions for standard table and floor lamps, and is compatible with incandescent, LED, Xenon, Halogen, fluorescent and compact fluorescent bulbs. Easily controlled by your mobile device or computer using any Z-Wave certified gateway, the space-saving horizontal module plugs into a standard wall receptacle without blocking the second outlet or obstructing placement of furniture. It provides dual simultaneous Z-Wave enabled outlets for the lamp or appliance that you would like to control and a regular pass-through AC outlet for other electrical appliances. Perfect for plug-in fans, heaters, lamps and more! Take control of your home lighting with GE Z-Wave Smart Lighting Controls!",
            name: "Description",
          },
          {
            text:
              "To return your switch to factory defaults:\n1. If plugged in, unplug the Switch from the receptacle.\n2. Press and hold the top button for at least 3 seconds while\nyou plug the switch into a receptacle.\nNote: This should only be used in the event your networks’\nprimary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text: "14282/ZW4106",
            id: "3033",
            name: "Identifier",
            type: "5052",
          },
          { text: "Plug-in Smart Switch, Dual Plug", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "3033",
            name: "FrequencyName",
            type: "5052",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2525/Binder1.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1437/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2104/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2525/xml",
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
