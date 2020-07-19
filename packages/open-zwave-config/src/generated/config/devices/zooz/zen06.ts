import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/027A:000A:0101",
            name: "OzwInfoPage",
          },
          { text: "images/zooz/zen06.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1901/",
            id: "000A",
            name: "ZWProductPage",
            type: "0101",
          },
          {
            text:
              "Product features:\n- Manual and remote on / off control\n- Energy monitoring\n- Scene inclusion for custom automation scenarios when included to a Z-Wave gateway controller\n- LED indicator displaying Z-Wave signal strength and power usage\n- Security enabled Z-Wave device with AES signal encryption (requires a security enabled gateway controller for full functionality)\n- Z-Wave Plus with improved 500 chip for faster and safer wireless communication\n- Built-in range extender for a stronger, more reliable network \n- 2 USB charging ports for your smart phone or tablet (no Z-Wave functionality)\n- Built-in overload protection in Z-Wave outlet and USB ports\n\nProduct Specifications: \nModel Number: ZEN06\nZ-Wave Signal Frequency: 908.42 MHz\nPower: 110V, 60Hz\nMaximum Load: 15A, 1800W\nUSB Charging Port Power: 1A and 2.4A\nOperating Temperature: 14 – 104 F\nRange: Up to 130 feet line of sight\nInstallation and Use: Indoor only\nDimensions: 4” x 2.5” x 1.2”\nWeight: 7oz",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1901/Zooz-Z-Wave-Smart-Plug-ZEN06 Manual.pdf",
            name: "ProductManual",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "000A",
            name: "FrequencyName",
            type: "0101",
          },
          { text: "Zooz Z-Wave Smart Plug", name: "Name" },
          {
            text:
              "Auto Z-Wave Inclusion\n1. Put your Z-Wave controller in inclusion mode\n2. Plug the smart plug into a grounded receptacle located within 3 feet from your Z-Wave gateway controller\n3. LED indicator will flash blue\n4. A new on / off device should be recognized by your Z-Wave controller\n\nManual Z-Wave Inclusion\n1. Plug the smart plug into a grounded receptacle located within 3 feet from your Z-Wave gateway controller\n2. Put your Z-Wave controller in inclusion mode\n3. Press and release the Z-Wave button 3 TIMES QUICKLY\n4. LED indicator will flash blue\n5. A new on / off device should be recognized by your Z-Wave controller\n\nSecure Z-Wave Inclusion\n1. Plug the smart plug into a grounded receptacle located within 3 feet from your Z-Wave gateway controller\n2. Put your Z-Wave controller in secure inclusion mode\n3. Press and HOLD the Z-Wave button for at least 3 seconds\n4. LED indicator will flash green\n5. LED indicator will turn solid green once the inclusion is completed. Please allow 5 minutes for configuration. DO NOT press any buttons or move the device during that time\n6. A new secure on / off device should be recognized by your Z-Wave controller",
            name: "InclusionDescription",
          },
          { text: "ZEN06", id: "000A", name: "Identifier", type: "0101" },
          {
            text:
              "When your network’s primary controller is missing or otherwise inoperable, you may need to reset the device to factory settings manually. In order to complete the process, plug the smart plug into a grounded receptacle, then PRESS AND HOLD the Z-Wave button for AT LEAST 20 SECONDS. The LED indicator will stay solid yellow for 2 seconds to indicate successful reset. The plug will then automatically turn off. \nNOTE: All previously recorded activity and custom settings will be erased from the device’s memory. You may only reset your smart plug once it has been included to a Z-Wave network.",
            name: "ResetDescription",
          },
          {
            text:
              "1. Plug the smart plug into a grounded receptacle located within 3 feet from your Z-Wave gateway controller\n2. Put your Z-Wave controller in exclusion mode\n3. Press and release the Z-Wave button 3 TIMES QUICKLY\n4. LED indicator will flash orange\n5. The smart plug should disappear from your controller's device list and LED indicator will remain solid orange for a few seconds to indicate exclusion",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1901/xml",
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
            instance: "1",
            label: "Overload Protection",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "turns relay off once voltage exceeds 16.5A for over 5 secs if enabled",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "On/Off Status Recovery After Power Failure",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Recovery state for power failure",
            Item: [
              { label: "Previous setting", value: "0" },
              { label: "ON", value: "1" },
              { label: "OFF", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "24",
            instance: "1",
            label: "On/Off Status Change Notifications ",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "Send notifications to associated devices",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Send any change", value: "1" },
              { label: "Send manual changes", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "27",
            instance: "1",
            label: "LED Indicator Control",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "LED Indicator Control",
            Item: [
              { label: "Display power consumption always", value: "0" },
              {
                label: "Display power consumption at state change",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "151",
            instance: "1",
            label: "Power Report Value Threshold",
            max: "65535",
            min: "0",
            size: "2",
            type: "short",
            units: "Watts",
            value: "50",
            Help: "Minimum change in watts to report",
          },
          {
            genre: "config",
            index: "152",
            instance: "1",
            label: "Power Report Percentage Threshold",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "%",
            value: "10",
            Help: "Minimum percentage change to report",
          },
          {
            genre: "config",
            index: "171",
            instance: "1",
            label: "Power Report Frequency",
            max: "2678400",
            min: "0",
            size: "4",
            type: "int",
            units: "seconds",
            value: "30",
            Help: "How often to report power consumption (W) in secs",
          },
          {
            genre: "config",
            index: "172",
            instance: "1",
            label: "Energy Report Frequency ",
            max: "2678400",
            min: "0",
            size: "4",
            type: "int",
            units: "seconds",
            value: "300",
            Help: "How often to report energy usage (KWH) in secs",
          },
          {
            genre: "config",
            index: "173",
            instance: "1",
            label: "Voltage Report Frequency ",
            max: "2678400",
            min: "0",
            size: "4",
            type: "int",
            units: "seconds",
            value: "0",
            Help: "How often to report voltage (V) in secs",
          },
          {
            genre: "config",
            index: "174",
            instance: "1",
            label: "Electricity Report Frequency",
            max: "2678400",
            min: "0",
            size: "4",
            type: "int",
            units: "seconds",
            value: "0",
            Help: "How often to report electrical current (A) in secs",
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
