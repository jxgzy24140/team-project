import { inject, observer } from "mobx-react";
import Stores from "@/stores/storeIdentifier";
import { Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCookie,
  faHouse,
  faParachuteBox,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

interface IProps {}
const Sidebar = inject(Stores.ProductStore)(
  observer((props: IProps) => {
    return (
      <Col className="bg-[#252525] h-full">
        {/* Logo */}
        <div className="flex justify-center items-center py-[26px] px-6">
          <img
            className="w-[50px] mx-auto my-0"
            src="https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg"
          />
        </div>

        {/* Content */}
        <div className="py-4 px-6 mt-9">
          <h3 className="mb-4 ml-4 text-sm font-medium text-gray-500">MENU</h3>
          <ul className="mb-6 flex flex-col">
            {/* Home Page */}
            <li className="mb-1.5">
              <a className="flex items-center rounded-sm px-4 py-2 font-medium text-gray-200 duration-300 ease-in-out hover:bg-gray-700 bg-gray-700">
                <span className="flex items-center">
                  <FontAwesomeIcon
                    className="mr-[10px] size-[14px]"
                    icon={faHouse}
                  />
                  Home Page
                </span>
              </a>
            </li>

            {/* Account */}
            <li className="mb-1.5">
              <a className="flex items-center rounded-sm px-4 py-2 font-medium text-gray-200 duration-300 ease-in-out hover:bg-gray-700">
                <span className="flex items-center">
                  <FontAwesomeIcon
                    className="mr-[10px] size-[14px]"
                    icon={faUser}
                  />
                  Account
                </span>
              </a>
            </li>

            {/* Product */}
            <li className="mb-1.5">
              <a className="flex items-center rounded-sm px-4 py-2 font-medium text-gray-200 duration-300 ease-in-out hover:bg-gray-700">
                <span className="flex items-center">
                  {/* Thay icon rõ hơn ? */}
                  <FontAwesomeIcon
                    className="mr-[10px] size-[14px]"
                    icon={faCookie}
                  />
                  Product
                </span>
              </a>
            </li>

            {/* Orders */}
            <li className="mb-1.5">
              <a className="flex items-center rounded-sm px-4 py-2 font-medium text-gray-200 duration-300 ease-in-out hover:bg-gray-700">
                <span className="flex items-center">
                  <FontAwesomeIcon
                    className="mr-[10px] size-[14px]"
                    icon={faParachuteBox}
                  />
                  Orders
                </span>
              </a>
            </li>
          </ul>
        </div>
      </Col>
    );
  })
);

export default Sidebar;
