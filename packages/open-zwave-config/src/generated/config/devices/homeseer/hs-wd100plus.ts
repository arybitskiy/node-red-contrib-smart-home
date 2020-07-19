import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 8,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/000C:3034:4447",
            name: "OzwInfoPage",
          },
          { text: "images/homeseer/hs-wd100plus.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2874/",
            id: "3034",
            name: "ZWProductPage",
            type: "4447",
          },
          {
            text:
              "Please use this procedure only in the event that the network primary controller is lost or otherwise inoperable.\n\nAll Configuration Parameters can all be restored to their factory default settings by using your primary controller to delete/reset the device.  \nTo manually reset, tap the ON button twice quickly and then tap the OFF button twice quickly.  Repeat the procedure to restore the settings to the factory default.",
            name: "ResetDescription",
          },
          { text: "Z-Wave Wall Dimmer", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "3034",
            name: "FrequencyName",
            type: "4447",
          },
          {
            text:
              "- Works with incandescent and dimmable florescent (CFL) and LED lighting\n- ON/OFF/DIM status LED indicator\n- Fits into standard single or multiple gang junction box\n- Keypad can be replaced manually to match color with other wall switches \n- Over-The-Air firmware upgrade available with compatible gateway, Z-Wave static controller, or PC and software\n- Internal resettable fuse to protect from surge current\n- Manual reset capability\n- Supports Central Scene\n- Supports S2 Security",
            name: "Description",
          },
          {
            text:
              "1. Turn the connected lights ON/OFF by tapping the switch. Tapping and releasing the upper part of the rocker turns the appliance ON. Tapping and releasing the lower part of the rocker turns the appliance OFF.\n2. Add(Include) the module to/from your Z-Wave network with your primary controller. Please refer to the instructions manual of your gateway or remote controller for details and procedures on how these actions can be done. \n3. Normally, the sequence is as follows: when the inclusion process is prompted by your primary controller, single click and release the rocker switch to ON or OFF position.  The controller should show that the action was successful.  If the controller shows it was a fail, repeat the procedure.",
            name: "InclusionDescription",
          },
          { text: "HS-WD100+", id: "3034", name: "Identifier", type: "4447" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2874/HS-WD100-Manual-6a.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1. Turn the connected appliance ON/OFF by tapping the switch. Tapping and releasing the upper part of the rocker turns the appliance ON. Tapping and releasing the lower part of the rocker turns the appliance OFF.\n2. Delete(Exclude) the module to/from your Z-Wave network with your primary controller. Please refer to the instructions manual of your gateway or remote controller for details and procedures on how these actions can be done. \n3. Normally, the sequence is as follows: when the exclusion process is prompted by your primary controller, single click and release the rocker switch.  The controller should show that the action was successful. If the controller shows it was a fail, repeat the procedure.",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1730/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1731/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 4,
              },
              {
                text: "Apply PR #1546 from kaburke",
                author: "Jean-Francois Auger- Nechry@gmail.com",
                date: "25 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2563/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2874/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 7,
              },
              {
                text:
                  "Added compatibility parameters to ensure correct dimming level is reported",
                author: "Jeremy M. Johnson",
                date: "23 June 2020",
                revision: 8,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "38",
        Compatibility: [{ VerifyChanged: [{ text: "true", index: "0" }] }],
      },
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
            index: "7",
            label: "Remote level percent",
            max: "99",
            min: "1",
            type: "short",
            units: "%",
            value: "99",
            Help:
              "Indicates how much each level dims/brightens as a portion of the whole range when set remotely.",
          },
          {
            genre: "config",
            index: "8",
            label: "Remote duration per level",
            max: "255",
            min: "1",
            size: "2",
            type: "short",
            units: "cs",
            value: "22",
            Help:
              "Indicates the time duration of each level when set remotely.",
          },
          {
            genre: "config",
            index: "9",
            label: "Local level percent",
            max: "99",
            min: "1",
            type: "short",
            units: "%",
            value: "99",
            Help:
              "Indicates how much each level dims/brightens as a portion of the whole range when set locally.",
          },
          {
            genre: "config",
            index: "10",
            label: "Local duration per level",
            max: "22",
            min: "1",
            size: "2",
            type: "short",
            units: "cs",
            value: "22",
            Help: "Indicates the time duration of each level when set locally.",
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
