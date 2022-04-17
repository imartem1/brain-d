import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

export function Tabs() {
    return (
        <TreeView className= "tabs"
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}

        >
            <TreeItem nodeId="1" label="step editor">
                <TreeItem nodeId="2" label="1.1.1" />
            </TreeItem>
            <TreeItem nodeId="5" label="tract editor">
                <TreeItem nodeId="10" label="2.1.1" />
                <TreeItem nodeId="6" label="edits">
                    <TreeItem nodeId="8" label="tracks editional" />
                </TreeItem>
            </TreeItem>
        </TreeView>
    );
}

export default Tabs;