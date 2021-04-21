import React, { useState, KeyboardEvent } from "react";

import styles from "./Select.module.css";

import { SelectPropsType } from "../../types";

function Select({
    items,
    value,
    collapsed,
    setCollapsed,
    onChange,
}: SelectPropsType) {
    const [hoveredElementValue, setHoveredElementValue] = useState(value);

    const toggleCollapsed = () => setCollapsed(!collapsed);

    const selectedItem = items.find((i) => i.value === value);
    const hoveredItem = items.find((i) => i.value === hoveredElementValue);

    const arrowAtTitleItem = collapsed ? "+" : "-";

    const onKeyDownPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hoveredElementValue) {
                    const pretendentElement =
                        e.key === "ArrowDown" ? items[i + 1] : items[i - 1];

                    if (pretendentElement) {
                        onChange(pretendentElement.value);
                        setHoveredElementValue(pretendentElement.value);
                        return;
                    }
                }
                if (e.key === "ArrowDown" && !selectedItem) {
                    onChange(items[0].value);
                    setHoveredElementValue(items[0].value);
                }
            }
        }

        if (e.key === "Enter" || e.key === "Escape") {
            setCollapsed(false);
        }
        if (e.key === "Enter" && !collapsed) {
            setCollapsed(true);
        }
    };

    const itemsMap = items.map((item) => {
        const callback = () => {
            onChange(item.value);
            setCollapsed(false);
        };
        return (
            <div
                className={`${styles.item} ${
                    hoveredItem === item ? styles.selected : ""
                }`}
                key={item.value}
                onClick={callback}
                onMouseEnter={() => setHoveredElementValue(item.value)}
            >
                {item.title}
            </div>
        );
    });

    return (
        <div className={styles.select} onKeyDown={onKeyDownPress} tabIndex={0}>
            <span className={styles.main} onClick={toggleCollapsed}>
                {selectedItem
                    ? `${selectedItem.title} ${arrowAtTitleItem}`
                    : `Empty ${arrowAtTitleItem}`}
            </span>
            {collapsed && <div className={styles.items}>{itemsMap}</div>}
        </div>
    );
}

export default Select;
