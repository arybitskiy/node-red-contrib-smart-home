import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0184:3034:4447",
            name: "OzwInfoPage",
          },
          { text: "images/dragontech/wd-100.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2031/",
            id: "3034",
            name: "ZWProductPage",
            type: "4447",
          },
          {
            text:
              "1. Turn the connected appliance ON/OFF by tapping the switch. Tapping and releasing the upper part of the rocker turns the appliance ON. Tapping and releasing the lower part of the rocker turns the appliance OFF.\n2. Delete(Exclude) the module to/from your Z-Wave network with your primary controller. Please refer to the instructions manual of your gateway or remote controller for details and procedures on how these actions can be done. \n3. Normally, the sequence is as follows: when the exclusion process is prompted by your primary controller, single click and release the rocker switch.  The controller should show that the action was successful. If the controller shows it was a fail, repeat the procedure.",
            name: "ExclusionDescription",
          },
          { text: "WD-100", id: "3034", name: "Identifier", type: "4447" },
          { text: "In-Wall Dimmer Switch", name: "Name" },
          {
            text:
              "1. Turn the connected lights ON/OFF by tapping the switch. Tapping and releasing the upper part of the rocker turns the appliance ON. Tapping and releasing the lower part of the rocker turns the appliance OFF.\n2. Add(Include) the module to/from your Z-Wave network with your primary controller. Please refer to the instructions manual of your gateway or remote controller for details and procedures on how these actions can be done. \n3. Normally, the sequence is as follows: when the inclusion process is prompted by your primary controller, single click and release the rocker switch to ON or OFF position.  The controller should show that the action was successful.  If the controller shows it was a fail, repeat the procedure.",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2031/WD-100_UG_updated 07212016.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Please use this procedure only in the event that the network primary controller is lost or otherwise inoperable.\n\nAll Configuration Parameters can all be restored to their factory default settings by using your primary controller to delete/reset the device.  \nTo manually reset, tap the ON button twice quickly and then tap the OFF button twice quickly.  Repeat the procedure to restore the settings to the factory default.",
            name: "ResetDescription",
          },
          {
            text:
              "- Works with incandescent and dimmable florescent (CFL) or most LED lighting\n- ON/OFF status and location LED indicator\n- Fits into standard single or multiple gang junction box\n- Keypad can be replaced manually to match color with other wall switches \n- Over-The-Air firmware upgrade available with compatible gateway, Z-Wave static controller, or PC and software\n- Internal resettable fuse to protect from surge current\n- Manual reset capability\n- Support Central Scene",
            name: "Description",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3034",
            name: "FrequencyName",
            type: "4447",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1127/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1676/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2031/xml",
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
            index: "4",
            label: "Orientation",
            max: "1",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n\t\t     The orientation of the ON/OFF on the rocker switch can be inverted by changing the configuration item from 0 to 1\n\t\t  ",
          },
          {
            genre: "config",
            index: "9",
            label: "Levels",
            max: "99",
            min: "1",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "\n\t\t    indicates the number of levels the lighting will change when the timer runs out\n\t\t  ",
          },
          {
            genre: "config",
            index: "10",
            label: "duration",
            max: "255",
            min: "1",
            type: "byte",
            units: "10 ms",
            value: "3",
            Help:
              "\n\t\t    indicates the time duration of each level.  The resolution is 10 milliseconds  for example, a default value of 3 means the timer runs out every 30 milliseconds.\n\t\t  ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [
              {
                index: "1",
                label:
                  "Group #1 for lifeline communications. Max associations=5.  Lifeline association only supports the manual reset event.",
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
