import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/014F:3038:4754",
            name: "OzwInfoPage",
          },
          { text: "images/linear/LB60Z-1.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1414/",
            id: "3038",
            name: "ZWProductPage",
            type: "4754",
          },
          { text: "LBR30Z-1", id: "3038", name: "Identifier", type: "4754" },
          {
            text:
              "You may manually reset the light bulb as follows:\n1.  Flick the wall switch “OFF-ON” 4 times within 4 seconds. \n2. The dt Smart Bulb will flash twice after Reset is successful.  \n\nUse this procedure only in the event that the network primary controller is lost or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3038",
            name: "FrequencyName",
            type: "4754",
          },
          {
            text:
              "1. Turn off power to the light bulb socket\n2. Follow the network controller instruction to place your network controller into exclusion mode to remove the dt light bulb from the network.\n3. After being prompted by the network controller, turn On power to the light bulb.  If successful, the LED light bulb will flash twice to indicate successful inclusion.",
            name: "ExclusionDescription",
          },
          {
            text:
              "1. Turn Off power to the light bulb socket\n2. Screw in the light bulb\n3. Place your network controller into inclusion mode by following the controller manufacturer's instructions\n4. Turn On power to the light bulb.  If successful, the LED light bulb will flash twice to indicate successful inclusion.\n5. If the controller/gateway shows it was a fail, repeat the procedure.\n\nNote: If Inclusion still fails after the 2nd attempt, you need to first RESET the dt Smart Bulb before repeating the above steps.",
            name: "InclusionDescription",
          },
          { text: "Smart LED Light Bulb", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1414/10006193X8 LBR30Z-1 Instructions.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Smart LED light bulb with Z-Wave radio.\n- Control lights remotely and save energy\n- Compatible with smart home systems supporting Z-Wave\n- 65 Watt equivalent light (650 lumens)\n- Consumes only 7.5 watts of power\n- 5000K Day light with frosted glass \n- Instant ON and fully dimmable\n- Functions as a Z-Wave signal repeater\n- Very simple to include in your network\n- Z-Wave Plus certified",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1162/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1290/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1291/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1414/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
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
            index: "1",
            label: "Dim Level Memory",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Using Last Dim Setting will bring the bulb back to the last dimness setting when turning on, instead of full brightness by default.",
            Item: [
              { label: "Full Brightness", value: "0" },
              { label: "Last Dim Setting", value: "1" },
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
