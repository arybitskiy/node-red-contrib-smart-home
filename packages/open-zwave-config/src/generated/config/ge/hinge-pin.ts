import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0063:3032:4953",
            name: "OzwInfoPage",
          },
          { text: "images/ge/hinge-pin.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1800/",
            id: "3032",
            name: "ZWProductPage",
            type: "4953",
          },
          {
            text: "32563 / ZW4001",
            id: "3032",
            name: "Identifier",
            type: "4953",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3032",
            name: "FrequencyName",
            type: "4953",
          },
          {
            text:
              "You may wish to reset all of your Hinge Pin Smart Door Sensor's settings to their factory defaults. To do this, press the program button 10 times within 6 seconds. If your Door Sensor has been successfully reset, its LED light will blink for 3 seconds. \n\nThis should only be used in the event your network’s primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to exclude a device from the Z-Wave network. \n2. Once the controller is ready to exclude your device, press and release the manual/program button on the Hinge Pin Smart Door Sensor to exclude it from the network.",
            name: "ExclusionDescription",
          },
          { text: "Hinge Pin Smart Door Sensor", name: "Name" },
          {
            text:
              "Transform any home into a smart home with the GE Hinge Pin Smart Door Sensor. This Smart Door Sensor is universal to fit any hinge size and is also reversible to allow it to work on a right or left opening door. With the adjustable zero pin position this will allow you to easily adjust for molding and when the sensor triggers. With the quick and easy installation, this sensor will notify you of when people enter or exit your home, you can also set the sensor to turn on a light or groups of lights.",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1800/32563-1 EnFrSp QSG - Combined.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1. Press and hold the Z-Wave Button for 6 seconds. It will be wake up and send “Wake Up Notification CC “ to HUB. \n2 .It will sleep after timeout for 10 seconds, or sleep right away when received the “Wake Up No More Information CC”.",
            name: "WakeupDescription",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to include the device to the Z-Wave network.\n2. Once the controller is ready to include your Hinge Pin Smart Door Sensor press and release the manual/program button on the smart switch to include it in the network.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1800/xml",
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
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "20",
            label: "Change Open/Close Report Method",
            size: "1",
            type: "list",
            value: "1",
            Item: [
              { label: "Notification", value: "1" },
              { label: "Basic Set", value: "2" },
              { label: "Basic Report", value: "3" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
