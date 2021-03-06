import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0039:3235:4944",
            name: "OzwInfoPage",
          },
          { text: "images/honeywell/39351-ZW3005.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3600/",
            id: "3235",
            name: "ZWProductPage",
            type: "4944",
          },
          { text: "In-Wall Smart Dimmer", name: "Name" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/3600/39351%20Binder.pdf",
            name: "ProductManual",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3235",
            name: "FrequencyName",
            type: "4944",
          },
          {
            text:
              "Quickly press ON (Top) button three (3) times then immediately\npress the OFF (Bottom) button three (3) times. The LED will flash\nON/OFF 5 times when completed successfully.\nNOTE: This should only be used in the event your network’s\nprimary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to\ninclude a device to the Z-Wave network.\n2. Once the controller is ready to add your device,\npress and release the top or bottom of the wireless smart\nswitch (rocker) to add it in the network.\nPlease reference the controller’s manual for instructions.",
            name: "InclusionDescription",
          },
          {
            text:
              "In-Wall Smart Dimmer with QuickFit and SimpleWire enhancements. Revolutionary QuickFit design features a housing depth that is up to 20 percent smaller than the previous Z-Wave models. This reduced size coupled with the elimination of heat taps provides a better fit in older style boxes and multi-gang configurations. SimpleWire technology allows line and load to automatically be configured with auto-sensing line-load terminals. All of this is coupled with Z-Wave S2 and Smart Start allows for effortless installation while being safer than ever!",
            name: "Description",
          },
          {
            text: "39351/ZW3010",
            id: "3235",
            name: "Identifier",
            type: "4944",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to\nremove a device from the Z-Wave network.\n2. Once the controller is ready to Exclude your device, press\nand release the top or bottom of the wireless smart dimmer\n(rocker) to remove it from the network.",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3600/xml",
                author: "Garrett Porter - suckitsears@yandex.com",
                date: "27 February 2020",
                revision: 1,
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
            label: "LED Indication Configuration",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Adjust the LED status to default, invert, always OFF or always ON",
            Item: [
              {
                label: "Device is ON, LED is OFF; device is OFF, LED is ON",
                value: "0",
              },
              {
                label: "Device is ON, LED is ON; device is OFF, LED is OFF",
                value: "1",
              },
              { label: "LED always OFF", value: "2" },
              { label: "LED always ON", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "6",
            label: "Dim up/down rate",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Adjust the speed at which the ramps to a specific value other than 0 and FF",
            Item: [
              {
                label:
                  "Dim up/down the light to the specified level quickly by command except value 0 and FF",
                value: "0",
              },
              {
                label:
                  "Dim up/down the light to the specified level slowly by command except value 0 and FF",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "16",
            label: "Switch Mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Turn your dimmer into an On/Off switch with switch mode",
            Item: [
              { label: "Disable normal operation", value: "0" },
              { label: "Enable switch mode", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "19",
            label: "Alternate Exclusion",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Never accidentally remove a device during with alternate exclusion",
            Item: [
              {
                label: "Normal operation, press any button on the device",
                value: "0",
              },
              {
                label:
                  "Press two times ON button and two times OFF button, LED will flash 5 times if exclusion is successful",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "30",
            label: "Minimum Dim Threshold",
            max: "99",
            min: "1",
            type: "byte",
            units: "",
            value: "1",
            Help: "Set the minimum dimmer threshold",
          },
          {
            genre: "config",
            index: "31",
            label: "Maximum Brightness Threshold",
            max: "99",
            min: "1",
            type: "byte",
            units: "",
            value: "99",
            Help: "Set the brightness threshold",
          },
          {
            genre: "config",
            index: "32",
            label: "Default Brightness Level",
            max: "99",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "Set the default brightness level that the dimmer will turn on when being controlled manually",
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
              { index: "2", label: "Basic - Load", max_associations: "5" },
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
