import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/000C:3035:4447",
            name: "OzwInfoPage",
          },
          { text: "images/homeseer/hs-ws200plus.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2675/",
            id: "3035",
            name: "ZWProductPage",
            type: "4447",
          },
          {
            text:
              "1. Turn the connected appliance ON/OFF by tapping the switch. Tapping and releasing the upper part of the rocker turns the appliance ON. Tapping and releasing the lower part of the rocker turns the appliance OFF.\n2. Delete(Exclude) the module to/from your Z-Wave network with your primary controller. Please refer to the instructions manual of your gateway or remote controller for details and procedures on how these actions can be done. Normally, the sequence is as follows: when the exclusion process is prompted by your primary controller, single click and release the rocker switch.  The controller should show that the action was successful. If the controller shows it was a fail, repeat the procedure.",
            name: "ExclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3035",
            name: "FrequencyName",
            type: "4447",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2675/HS-WS200-Manual-v4.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Please use this procedure only in the event that the network primary controller is lost or otherwise inoperable.\n\nAll Configuration Parameters can all be restored to their factory\ndefault settings by using your primary controller to delete/reset\nthe device.   To manually reset, tap the ON button twice quickly and then tap the OFF button twice quickly.  Repeat the procedure to restore the settings to the factory default.",
            name: "ResetDescription",
          },
          {
            text:
              "HS-WS200+ In Wall On/Off Switch\n- Works with incandescent, florescent (CFL), or most LED lighting and appliances\n- ON/OFF status and location LED indicator\n- Includes Z-Wave controllable RGB LED indicator\n- Fits into standard single or multiple gang junction box\n- Keypad can be replaced manually to match color with other wall switches \n- Over-The-Air firmware upgrade available with compatible gateway, Z-Wave static controller, or PC and software.\n- Internal resettable fuse to protect from surge current\n- Manual reset capability\n- Support Central Scene",
            name: "Description",
          },
          { text: "Z-Wave Wall Switch with RGB LED", name: "Name" },
          { text: "HS-WS200+", id: "3035", name: "Identifier", type: "4447" },
          {
            text:
              "1. Turn the connected appliance ON/OFF by tapping the switch. Tapping and releasing the upper part of the rocker turns the appliance ON. Tapping and releasing the lower part of the rocker turns the appliance OFF.\n2. Add(Include) the module to/from your Z-Wave network with your primary controller. Please refer to the instructions manual of your gateway or remote controller for details and procedures on how these actions can be done. \n3. Normally, the sequence is as follows: when the inclusion process is prompted by your primary controller, single click and release the rocker switch to ON or OFF position.  The controller should show that the action was successful.  If the controller shows it was a fail, repeat the procedure.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2675/xml",
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
            index: "13",
            label: "LED mode",
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
            label: "Status mode LED color",
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
            index: "31",
            label: "LED blink frequency",
            max: "255",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "Sets the blink frequency of the LED\n              0 = No Blink\n              1 = 100ms ON then 100ms OFF\n            ",
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
