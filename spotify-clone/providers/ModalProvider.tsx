"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";

const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false);

	// Makes sure that the rendering only occurs when the client rendering is happening.
	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<>
			<AuthModal />
			<UploadModal />
		</>
	);
};

export default ModalProvider;
