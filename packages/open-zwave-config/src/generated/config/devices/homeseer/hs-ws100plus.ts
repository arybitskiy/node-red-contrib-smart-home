import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/000C:3033:4447",
            name: "OzwInfoPage",
          },
          { text: "images/homeseer/hs-ws100plus.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2894/",
            id: "3033",
            name: "ZWProductPage",
            type: "4447",
          },
          { text: "HS-WS100+", id: "3033", name: "Identifier", type: "4447" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2894/HS-WS100-Manual-v6.pdf",
            name: "ProductManual",
          },
          {
            text:
              "HS-WS100+ In Wall On/Off Switch\n- Works with incandescent, florescent (CFL), or most LED lighting and appliances\n- ON/OFF status and location LED indicator\n- Fits into standard single or multiple gang junction box\n- Keypad can be replaced manually to match color with other wall switches \n- Over-The-Air firmware upgrade available with compatible gateway, Z-Wave static controller, or PC and software.\n- Internal resettable fuse to protect from surge current\n- Manual reset capability\n- Support Central Scene",
            name: "Description",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3033",
            name: "FrequencyName",
            type: "4447",
          },
          {
            text:
              "1. Turn the connected appliance ON/OFF by tapping the switch. Tapping and releasing the upper part of the rocker turns the appliance ON. Tapping and releasing the lower part of the rocker turns the appliance OFF.\n2. Add(Include) the module to/from your Z-Wave network with your primary controller. Please refer to the instructions manual of your gateway or remote controller for details and procedures on how these actions can be done. \n3. Normally, the sequence is as follows: when the inclusion process is prompted by your primary controller, single click and release the rocker switch to ON or OFF position.  The controller should show that the action was successful.  If the controller shows it was a fail, repeat the procedure.",
            name: "InclusionDescription",
          },
          {
            text:
              "1. Turn the connected appliance ON/OFF by tapping the switch. Tapping and releasing the upper part of the rocker turns the appliance ON. Tapping and releasing the lower part of the rocker turns the appliance OFF.\n2. Delete(Exclude) the module to/from your Z-Wave network with your primary controller. Please refer to the instructions manual of your gateway or remote controller for details and procedures on how these actions can be done. Normally, the sequence is as follows: when the exclusion process is prompted by your primary controller, single click and release the rocker switch.  The controller should show that the action was successful. If the controller shows it was a fail, repeat the procedure.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Please use this procedure only in the event that the network primary controller is lost or otherwise inoperable.\n\nAll Configuration Parameters can all be restored to their factory\ndefault settings by using your primary controller to delete/reset\nthe device.   To manually reset, tap the ON button twice quickly and then tap the OFF button twice quickly.  Repeat the procedure to restore the settings to the factory default.",
            name: "ResetDescription",
          },
          { text: "Z-Wave Wall Switch", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2554/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2894/xml",
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
            index: "3",
            label: "LED Status",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Set the LED policy: on if the load is on, off if the load is on, or off all the time ",
            Item: [
              { label: "LED off if load on", value: "0" },
              { label: "LED on if load on", value: "1" },
              { label: "LED off all the time", value: "2" },
            ],
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
