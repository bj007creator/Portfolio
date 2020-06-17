import React, { useContext } from 'react';

import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import ThemeToggleable from '../../utils/ThemeToggleable';
import { ContainerToggleThemeButton } from './style';

    const ToggleThemeButton : React.FC<ThemeToggleable> = ( { toggleTheme } ) => {
    const { colors, title } = useContext(ThemeContext);
    return (
        <ContainerToggleThemeButton>
            <div className="switch">
                <Switch
                    onChange={toggleTheme}
                    checked={title === 'dark'}
                    height={20}
                    width={50}
                    handleDiameter={20}
                    onColor={colors.selected}
                    offColor={colors.background}
                    offHandleColor='#000'
                    onHandleColor='#000'
                />
            </div>
        </ContainerToggleThemeButton>
    );
}

export default ToggleThemeButton;