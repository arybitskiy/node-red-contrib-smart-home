import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0118:0004:0003",
            name: "OzwInfoPage",
          },
          { text: "images/wenzhou/tz55.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1444/",
            id: "0004",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "Smart Plug in Switch", name: "Name" },
          {
            text:
              "1. Have Z-Wave controller with exclusion mode\n\n2. Press the socket on/off button three times within 1.5 seconds to be excluded from the controller",
            name: "ExclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0004",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "1. This plug-in ON/OFF switch in a transceiver which is a Z-Wave enabled device and is fully compatible with any Z-Wave enabled network. \n2. Each socket is designed to act as a repeater. Repeaters will re-transmit the RF signal to ensure the signal to ensure that the signal is received by its intended destination.\n3. You can use the button in the socket to include/exclude, manually on/off or act as a indicator. You can use it to turn on/off appliance remotely via smart phone or computer.",
            name: "Description",
          },
          {
            text:
              "1. Press the socket on/off button three times within 1.5 seconds\n2.  then within 1 second to press and hold on for 5 seconds until the socket button LED is off, reset to factory default successfully\n3. Use this procedure only in the event that the network primary controller is missing or otherwise inoperable",
            name: "ResetDescription",
          },
          { text: "TZ68E", id: "0004", name: "Identifier", type: "0003" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1444/TZ68G User Manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1. Have Z-Wave controller with inclusion mode\n\n2. Press the socket on/off button three times within 1.5 seconds to be included to the controller",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1444/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
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
            index: "1",
            instance: "1",
            label: "Night light",
            max: "1",
            min: "0",
            type: "byte",
            value: "1",
            Help:
              "The LED on the TZ55D will by default, turn ON when the load attached is turned OFF. To make the LED turn ON when the load attached is turned ON instead, set parameter to a value of 1.",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Memory Function",
            max: "1",
            min: "0",
            type: "byte",
            value: "1",
            Help:
              "Stated in the above form,switch by default value is 1,when the value is 0,switch memory function not open; when the value is 1,open switch memory function",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Invert switch",
            max: "1",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "To change the top of the switch to OFF and the bottom of the switch ON , set parameter 4 to 1.",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "LED Transmission indication",
            max: "2",
            min: "0",
            type: "byte",
            value: "1",
            Help:
              "The TZ56-D will flicker its LED when it is transmitting to any of its 4 groups. This flickering can be set to not flicker at all (set to 0), to flicker the entire time it is transmitting (set to 1), or to flicker for only 1 second when it begins transmitting (set to 2). By default, the TZ55D is set to flicker for only 1 second.",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Suspend Group 4",
            max: "1",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "Setting this parameter to the value of 1 will stop the TZ55D from transmitting to devices that are associated into Group 4.",
          },
        ],
      },
    ],
  },
};

export default config;
