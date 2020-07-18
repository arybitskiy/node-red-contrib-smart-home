import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0063:3036:4952",
            name: "OzwInfoPage",
          },
          { text: "images/ge/14291-switch.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2501/",
            id: "3036",
            name: "ZWProductPage",
            type: "4952",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to exclude a device from the Z-Wave network. \n2. Once the controller is ready to exclude your device, press and release the top button of the wireless smart switch (rocker) to exclude it from the network.",
            name: "ExclusionDescription",
          },
          {
            text: "14291/ZW4005",
            id: "3036",
            name: "Identifier",
            type: "4952",
          },
          {
            text:
              "Transform any home into a smart home with the GE Z-Wave In-Wall Smart Switch. The on/off switch replaces your current light switch, uses your existing wiring, and provides Z-Wave wireless and in-wall control of overhead lighting. The switch enables wireless control of on/off functions of direct wire incandescent, LED, xenon, halogen and fluorescent lighting. Providing ultimate flexibility, the GE Z-Wave Smart Lighting Control On/Off Switch allows you to operate the switch by itself or easily integrate the switch with two-way, three-way or four-way wiring configurations by adding the GE Add-On switch. Single pole wiring configuration turns the light or appliance on/off from one location. Three-way wiring configuration turns the light on/off from two separate locations. Four-way wiring configuration turns the light on/off from three separate locations. The GE Add-On Switch is required for Three-way or Four-way installations. The lighting control includes a blue LED indicator light to easily locate the switch in a dark room. Take control of your home lighting with GE Z-Wave Smart Lighting Controls!",
            name: "Description",
          },
          {
            text:
              "1. Quickly press ON (Top) button 3 times then immediately press the OFF (Bottom) button 3 times. The LED will flash ON/OFF 5 times when completed successfully. \n2. Please use this reset procedure only when the primary controller is missing or inoperable.",
            name: "ResetDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3036",
            name: "FrequencyName",
            type: "4952",
          },
          { text: "In-Wall Smart Switch", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2501/Binder1.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to include a device to the Z-Wave network.\n2. Once the controller is ready to include your device, press and release the top or bottom of the wireless smart switch(rocker) to include it in the network.\n3. Once your controller has confirmed that the device has been included, refresh the Z-Wave network to optimize performance.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1438/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1879/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2501/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 5,
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
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Sets when the LED on the switch is lit.",
            Item: [
              { label: "LED on when light off", value: "0" },
              { label: "LED on when light on", value: "1" },
              { label: "LED always off", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Invert Switch",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Change the top of the switch to OFF and the bottom of the switch to ON, if the switch was installed upside down.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              {
                index: "2",
                label: "Basic - Local Load",
                max_associations: "5",
              },
              {
                index: "3",
                label: "Basic - Double Tap",
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
