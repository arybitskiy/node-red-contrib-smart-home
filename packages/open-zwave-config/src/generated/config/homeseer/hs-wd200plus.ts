import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/000C:3036:4447",
            name: "OzwInfoPage",
          },
          { text: "images/homeseer/hs-wd200plus.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2676/",
            id: "3036",
            name: "ZWProductPage",
            type: "4447",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2676/HS-WD200-Manual-4.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1. Turn the connected lights ON/OFF by tapping the switch. Tapping and releasing the upper part of the rocker turns the appliance ON. Tapping and releasing the lower part of the rocker turns the appliance OFF.\n2. Add(Include) the module to/from your Z-Wave network with your primary controller. Please refer to the instructions manual of your gateway or remote controller for details and procedures on how these actions can be done. \n3. Normally, the sequence is as follows: when the inclusion process is prompted by your primary controller, single click and release the rocker switch to ON or OFF position.  The controller should show that the action was successful.  If the controller shows it was a fail, repeat the procedure.",
            name: "InclusionDescription",
          },
          {
            text:
              "Please use this procedure only in the event that the network primary controller is lost or otherwise inoperable.\n\nAll Configuration Parameters can all be restored to their factory default settings by using your primary controller to delete/reset the device.  \nTo manually reset, tap the ON button twice quickly and then tap the OFF button twice quickly.  Repeat the procedure to restore the settings to the factory default.",
            name: "ResetDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3036",
            name: "FrequencyName",
            type: "4447",
          },
          {
            text:
              "- Works with incandescent and dimmable florescent (CFL) or most LED lighting\n- ON/OFF status and location LED indicator\n- Includes Z-Wave controllable RGB LED indicators\n- Fits into standard single or multiple gang junction box\n- Keypad can be replaced manually to match color with other wall switches \n- Over-The-Air firmware upgrade available with compatible gateway, Z-Wave static controller, or PC and software\n- Internal resettable fuse to protect from surge current\n- Manual reset capability\n- Support Central Scene\n- Includes Controllable RGB LED Indicators",
            name: "Description",
          },
          { text: "Z-Wave Wall Dimmer with RGB LED", name: "Name" },
          {
            text:
              "1. Turn the connected appliance ON/OFF by tapping the switch. Tapping and releasing the upper part of the rocker turns the appliance ON. Tapping and releasing the lower part of the rocker turns the appliance OFF.\n2. Delete(Exclude) the module to/from your Z-Wave network with your primary controller. Please refer to the instructions manual of your gateway or remote controller for details and procedures on how these actions can be done. \n3. Normally, the sequence is as follows: when the exclusion process is prompted by your primary controller, single click and release the rocker switch.  The controller should show that the action was successful. If the controller shows it was a fail, repeat the procedure.",
            name: "ExclusionDescription",
          },
          { text: "HS-WD200+", id: "3036", name: "Identifier", type: "4447" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2676/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
            index: "3",
            label: "Sets bottom LED operation",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "Sets bottom LED operation (in normal mode)",
            Item: [
              { label: "LED on if load is off", value: "0" },
              { label: "LED off if load is off", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Invert switch",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Change the top of the switch to OFF and the bottom of the switch to ON if the switch was installed upside down.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "11",
            label: "Dimmer ramp rate for remote control",
            max: "90",
            min: "0",
            type: "byte",
            value: "3",
            Help: "Ramp rate in seconds. 0 is no delay",
          },
          {
            genre: "config",
            index: "12",
            label: "Dimmer ramp rate for local control",
            max: "90",
            min: "0",
            type: "byte",
            value: "3",
            Help: "Ramp rate in seconds. 0 is no delay",
          },
          {
            genre: "config",
            index: "13",
            label: "Dimmer LED mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Normal mode (load status) or status mode (custom status)",
            Item: [
              { label: "Normal mode", value: "0" },
              { label: "Status mode", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "14",
            label: "Normal mode LED color",
            max: "6",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Sets the Normal mode LED color",
            Item: [
              { label: "White", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
              { label: "Blue", value: "3" },
              { label: "Magenta", value: "4" },
              { label: "Yellow", value: "5" },
              { label: "Cyan", value: "6" },
            ],
          },
          {
            genre: "config",
            index: "21",
            label: "Status mode LED 1 (bottom) color",
            max: "7",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Sets the Status mode LED color",
            Item: [
              { label: "Off", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
              { label: "Blue", value: "3" },
              { label: "Magenta", value: "4" },
              { label: "Yellow", value: "5" },
              { label: "Cyan", value: "6" },
              { label: "White", value: "7" },
            ],
          },
          {
            genre: "config",
            index: "22",
            label: "Status mode LED 2 color",
            max: "7",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Sets the Status mode LED color",
            Item: [
              { label: "Off", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
              { label: "Blue", value: "3" },
              { label: "Magenta", value: "4" },
              { label: "Yellow", value: "5" },
              { label: "Cyan", value: "6" },
              { label: "White", value: "7" },
            ],
          },
          {
            genre: "config",
            index: "23",
            label: "Status mode LED 3 color",
            max: "7",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Sets the Status mode LED color",
            Item: [
              { label: "Off", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
              { label: "Blue", value: "3" },
              { label: "Magenta", value: "4" },
              { label: "Yellow", value: "5" },
              { label: "Cyan", value: "6" },
              { label: "White", value: "7" },
            ],
          },
          {
            genre: "config",
            index: "24",
            label: "Status mode LED 4 color",
            max: "7",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Sets the Status mode LED color",
            Item: [
              { label: "Off", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
              { label: "Blue", value: "3" },
              { label: "Magenta", value: "4" },
              { label: "Yellow", value: "5" },
              { label: "Cyan", value: "6" },
              { label: "White", value: "7" },
            ],
          },
          {
            genre: "config",
            index: "25",
            label: "Status mode LED 5 color",
            max: "7",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Sets the Status mode LED color",
            Item: [
              { label: "Off", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
              { label: "Blue", value: "3" },
              { label: "Magenta", value: "4" },
              { label: "Yellow", value: "5" },
              { label: "Cyan", value: "6" },
              { label: "White", value: "7" },
            ],
          },
          {
            genre: "config",
            index: "26",
            label: "Status mode LED 6 color",
            max: "7",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Sets the Status mode LED color",
            Item: [
              { label: "Off", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
              { label: "Blue", value: "3" },
              { label: "Magenta", value: "4" },
              { label: "Yellow", value: "5" },
              { label: "Cyan", value: "6" },
              { label: "White", value: "7" },
            ],
          },
          {
            genre: "config",
            index: "27",
            label: "Status mode LED 7 color",
            max: "7",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Sets the Status mode LED color",
            Item: [
              { label: "Off", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
              { label: "Blue", value: "3" },
              { label: "Magenta", value: "4" },
              { label: "Yellow", value: "5" },
              { label: "Cyan", value: "6" },
              { label: "White", value: "7" },
            ],
          },
          {
            genre: "config",
            index: "30",
            label: "Status mode blink frequency",
            max: "255",
            min: "0",
            type: "byte",
            value: "0",
            Help: "100ms blink intervals. 0 is off",
          },
          {
            genre: "config",
            index: "31",
            label: "LEDs to blink in status mode",
            max: "255",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "Bitmask defines specific LEDs to enable for blinking: Note: this decimal value is derived from a hex code calculation based on the following: \n              Bit 0 = led 1\n              Bit 1 = led 2\n              Bit 2 = led 3\n              Bit 3 = led 4\n              Bit 4 = led 5\n              Bit 5 = led 6\n              Bit 6 = led 7 \n              IE: value of 1 = first LED, 64 = led 7\n            ",
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
