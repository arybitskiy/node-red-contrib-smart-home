import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/027A:000D:0101",
            name: "OzwInfoPage",
          },
          { text: "images/zooz/zen15.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2517/",
            id: "000D",
            name: "ZWProductPage",
            type: "0101",
          },
          {
            text:
              "1. Plug the Power Switch into a grounded receptacle located within direct range of your Z-Wave gateway controller\n2. Put your Z-Wave controller into exclusion mode\n3. Press and release the Z-Wave button 3 TIMES QUICKLY\n4. The LED indicator will start flashing orange, then turn blue (on) or pink (off) once excluded\n5. The Power Switch will disappear from your controller's device list. The LED indicator will remain solid orange for a few seconds to indicate exclusion\n\nIf the first attempt is unsuccessful, please repeat the process following all steps carefully.",
            name: "ExclusionDescription",
          },
          { text: "Zooz Z-Wave Plus Power Switch", name: "Name" },
          {
            text:
              "PRODUCT FEATURES:\nLocal and Z-Wave wireless control of your favorite home appliances like microwaves and refrigerators.\n\nEnergy monitoring in live mode or over time (your Z-Wave gateway needs to support this feature).\n\nScene inclusion for custom automation events when included to a Z-Wave gateway controller.\n\nOn/Off status recovery after power failure.\n\nLED indicator to display Z-Wave signal strength and power usage for the connected device.\n\nAdded security with AES signal encryption (requires a security enabled gateway controller for full functionality).\n\nZ-Wave Plus with improved 500 chip for faster and more reliable wireless communication.\n\nBuilt-in range extender.\n\nSPECIFICATIONS:\nModel Number: ZEN15\nZ-Wave Signal Frequency: 908.42 MHz\nPower: 120V, 60Hz\nMaximum Load: 15A, 1800W, ½ HP\nOperating Temperature: 14° – 104° F\nRange: Up to 130 feet line of sight\nInstallation and Use: Indoor only\nDimensions: 20” (with cord) x 2.6” x 1.1”\nWeight: 10oz",
            name: "Description",
          },
          { text: "ZEN15", id: "000D", name: "Identifier", type: "0101" },
          {
            text: "U.S. / Canada / Mexico",
            id: "000D",
            name: "FrequencyName",
            type: "0101",
          },
          {
            text:
              "When your network’s primary controller is missing or otherwise inoperable, you may need to reset the device to factory settings manually. In order to complete the process, plug the Power Switch into a grounded receptacle, then PRESS AND HOLD the Z-Wave button for AT LEAST 20 SECONDS. The LED indicator will flash orange and then stay solid orange for 2 seconds to indicate successful reset. The Power Switch will then turn off.\n\nNOTE: All previously recorded activity and custom settings will be erased from the device’s memory. You may only reset your Power Switch once it has been included to a Z-Wave network.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2517/zooz-z-wave-plus-power-switch-zen15-user-manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Please include the Power Switch to your network BEFORE connecting it to the appliance you wish to control.\n\nAuto Z-Wave Inclusion:\n1. Put your Z-Wave controller into inclusion mode\n2. Plug the Power Switch into a grounded receptacle located within direct range from your Z-Wave gateway controller\n3. The LED indicator will start flashing blue, then turn blue (on) or pink (off) once included\n4. A new on / off device will be recognized by your Z-Wave controller\n\nManual Z-Wave Inclusion:\n1. Plug the Power Switch into a grounded receptacle located within direct range from your Z-Wave gateway controller\n2. Put your Z-Wave controller into inclusion mode\n3. Press and release the Z-Wave button 3 TIMES QUICKLY\n4. The LED indicator will start flashing blue, then turn blue (on) or pink (off) once included\n5. A new on / off device will be recognized by your Z-Wave controller\n\nSecure Z-Wave Inclusion:\n1. Plug the Power Switch into a grounded receptacle located within direct range from your Z-Wave gateway controller\n2. Put your Z-Wave controller in secure inclusion mode\nPress and HOLD the Z-Wave button for at least 3 seconds\n3. The LED indicator will start flashing green, then turn blue (on) or pink (off) once included\n4. A new secure on / off device will be recognized by your Z-Wave controller",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2517/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
              },
            ],
          },
        ],
      },
    ],
    Protocol: [{ refreshonnodeinfoframe: "true" }],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "20",
            label: "Overload Protection",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "Overload protection.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "21",
            label: "On/Off Status Recovery After Power Failure",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Choose the recovery state for your Power Switch if power outage occurs.",
            Item: [
              { label: "Previous state", value: "0" },
              { label: "ON", value: "1" },
              { label: "OFF", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "24",
            label: "On/Off Status Change Notifications",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "Send On/Off Status Change Notifications",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Sends notification if status is changed manually or remotely",
                value: "1",
              },
              {
                label: "Sends notification ONLY if status is changed manually",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "27",
            label: "LED Indicator Control",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "0 - LED indicator will display power consumption whenever the device is plugged in. 1 - LED indicator will display the level of power consumption for 5 seconds only whenever the device is turned on or off",
            Item: [
              {
                label: "Display whenever the device is plugged in (Default)",
                value: "0",
              },
              { label: "Display power consumption for 5 seconds", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "151",
            label: "Power Report Value Threshold",
            max: "65535",
            min: "1",
            size: "2",
            type: "short",
            units: "watts",
            value: "0",
            Help:
              "Number of Watts the appliance needs to go over for the change to be reported",
          },
          {
            genre: "config",
            index: "152",
            label: "Power Report Percentage Threshold",
            max: "255",
            min: "1",
            size: "4",
            type: "int",
            units: "%",
            value: "10",
            Help:
              "Percentage in power usage change the appliance needs to go over for the event to be reported (Default 10)",
          },
          {
            genre: "config",
            index: "171",
            label: "Power Report Frequency",
            max: "2678400",
            min: "5",
            size: "4",
            type: "int",
            value: "0",
            Help: "Number of seconds",
          },
          {
            genre: "config",
            index: "172",
            label: "Energy Report Frequency",
            max: "2678400",
            min: "5",
            size: "4",
            type: "int",
            value: "0",
            Help: "Number of seconds",
          },
          {
            genre: "config",
            index: "173",
            label: "Voltage Report Frequency",
            max: "2678400",
            min: "5",
            size: "4",
            type: "int",
            value: "0",
            Help: "Number of seconds",
          },
          {
            genre: "config",
            index: "174",
            label: "Electricity Report Frequency",
            max: "2678400",
            min: "5",
            size: "4",
            type: "int",
            value: "0",
            Help: "Number of seconds",
          },
        ],
      },
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
